import axios from "axios";
import { AbstractServicesService } from "@/services/abstract.services.service";
import { object, string } from "yup";
import {
  BlogInterface,
  Details,
} from "@/services/blog/blog.interface";
import { stripHtml } from "string-strip-html";
import * as process from "process";
import { JSDOM } from "jsdom";

export interface Root {
  data: Daum[];
  limit: number;
  page: number;
  total_results: number;
  total_pages: number;
}

export interface Daum {
  id: string;
  subtitle: string;
  title: string;
  authors: string[];
  created: number;
  status: string;
  publish_date: number;
  displayed_date: number;
  split_tested: boolean;
  subject_line: string;
  preview_text: string;
  slug: string;
  thumbnail_url: string;
  web_url: string;
  audience: string;
  platform: string;
  content_tags: string[];
  content: Content;
  stats: Stats;
}

export interface Content {
  free: Free;
  premium: Premium;
}

export interface Free {
  web: string;
  email: string;
  rss: string;
}

export interface Premium {
  web: string;
  email: string;
}

export interface Stats {
  email: Email;
  web: Web;
  clicks: Click[];
}

export interface Email {
  recipients: number;
  opens: number;
  unique_opens: number;
  open_rate: number;
  clicks: number;
  unique_clicks: number;
  click_rate: number;
  unsubscribes: number;
  spam_reports: number;
}

export interface Web {
  views: number;
  clicks: number;
}

export interface Click {
  url: string;
  email: Email2;
  web: Web2;
  total_clicks: number;
  total_unique_clicks: number;
  total_click_through_rate: number;
}

export interface Email2 {
  clicks: number;
  unique_clicks: number;
  click_through_rate: number;
}

export interface Web2 {
  clicks: number;
  unique_clicks: number;
  click_through_rate: number;
}

const axiosInstance = axios.create({
  baseURL: "https://api.beehiiv.com/v2/",
  headers: {
    Authorization: `Bearer ${process.env.BLOG_TOKEN}`,
  },
});

export class BeeHiivService
  extends AbstractServicesService
  implements BlogInterface
{
  static authors = {} as { [key: number]: { name: string; picture: string } };
  static featuredImage = {} as { [key: number]: string };

  validation = object({
    BLOG_PATH: string().required(),
    BLOG_TOKEN: string().required(),
    BLOG_ID: string().required(),
  });

  providerName = "Wordpress";

  async getPost(slug: string): Promise<Details> {
    const getAll = await this.getPostList();
    const findPost = getAll.find((post) => post.slug === slug);

    const {
      data: { data },
    }: { data: { data: Daum } } = await axiosInstance.get(
      `/publications/${
        process.env.BLOG_ID
      }/posts/${findPost?.id!}?expand[]=free_web_content`
    );

    const dom = new JSDOM(data.content.free.web);
    Array.from(dom.window.document.querySelectorAll("style")).map((p: any) =>
      p.remove()
    );
    Array.from(dom.window.document.querySelectorAll("[style]")).map((p) => {
      // @ts-ignore
      p.style.padding = "";
      // @ts-ignore
      p.style.margin = "";
      // @ts-ignore
      p.style.fontSize = "";
      // @ts-ignore
      p.style.fontWeight = "";
      // @ts-ignore
      p.style.lineHeight = "";
      // @ts-ignore
      p.style.fontFamily = "";
      return p;
    });
    const description =
      dom.window.document.querySelector("#content-blocks")?.innerHTML!;
    return {
      title: data.title,
      description,
      slug: slug,
      created: data.created,
      subtitle: data.subtitle,
      seo: "<br />",
      picture: data.thumbnail_url,
      author: {
        name: data.authors[0],
        picture: dom.window.document
          .querySelector("[alt=Author]")
          ?.getAttribute("src")!,
      },
    };
  }

  async getPostList(page = 1): Promise<Details[]> {
    const {
      data: { data: list },
    }: { data: { data: Daum[] } } = await axiosInstance.get(
      `/publications/${process.env.BLOG_ID}/posts?page=1&limit=100&status=confirmed&expand[]=free_web_content`
    );

    return [
      ...(
        await Promise.all(
          list.map(async (l) => ({
            id: l.id,
            title: l.title,
            created: l.created,
            description: l.subtitle,
            subtitle: '',
            slug: l.slug,
            picture: l.thumbnail_url,
            author: {
              name: l.authors[0],
              picture: new JSDOM(l.content.free.web).window.document
                .querySelector("[alt=Author]")
                ?.getAttribute("src")!,
            },
          }))
        )
      ).sort((a, b) => (a.created > b.created ? -1 : 1)),
      ...(list.length < 100 ? [] : await this.getPostList(page + 1)),
    ];
  }
}
