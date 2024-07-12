import axios, { CreateAxiosDefaults } from "axios";
import { AbstractServicesService } from "@/services/abstract.services.service";
import { object, string } from "yup";
import {BlogInterface, Details} from "@/services/blog/blog.interface";
import { stripHtml } from "string-strip-html";

export interface Root {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  // Yoast must be installed
  yoast_head?: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: any[];
  uagb_featured_image_src: UagbFeaturedImageSrc;
  uagb_author_info: UagbAuthorInfo;
  uagb_comment_info: number;
  uagb_excerpt: string;
  _links: Links;
}

export interface Guid {
  rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Meta {
  _uag_custom_page_level_css: string;
}

export interface UagbFeaturedImageSrc {
  full: boolean;
  thumbnail: boolean;
  medium: boolean;
  medium_large: boolean;
  large: boolean;
  "1536x1536": boolean;
  "2048x2048": boolean;
}

export interface UagbAuthorInfo {
  display_name: string;
  author_link: string;
}

export interface Links {
  self: Self[];
  collection: Collection[];
  about: About[];
  author: Author[];
  replies: Reply[];
  "version-history": VersionHistory[];
  "wp:attachment": WpAttachment[];
  "wp:term": WpTerm[];
  curies: Cury[];
}

export interface Self {
  href: string;
}

export interface Collection {
  href: string;
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Reply {
  embeddable: boolean;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface WpAttachment {
  href: string;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

const wordpress = axios.create({
  baseURL: process?.env?.BLOG_PATH!,
  transformResponse: [
      function (data) {
        const findPath = new URL(process.env.BLOG_PATH!)?.host! as string;
        const replacePath = new URL(process.env.COURSE_URL!)?.host! as string;

        const findProtocol = new URL(process.env.BLOG_PATH!)?.protocol! as string;
        const replaceProtocol = new URL(process.env.COURSE_URL!)?.protocol! as string;

        const regEx = new RegExp(findPath, 'gi');
        const regEx2 = new RegExp(findProtocol, 'gi');
        return JSON.parse(data.replace(regEx, replacePath).replace(regEx2, replaceProtocol));
      }
  ]
} as CreateAxiosDefaults);

export class WordpressService
  extends AbstractServicesService
  implements BlogInterface
{
  static authors = {} as { [key: number]: { name: string; picture: string } };
  static featuredImage = {} as { [key: number]: string };

  validation = object({
    BLOG_PATH: string().required(),
  });

  providerName = "Wordpress";

  async getPost(slug: string): Promise<Details> {
    const l: Root[] = (await wordpress.get(`/wp-json/wp/v2/posts?slug=${slug}`))
      .data;

    return {
      title: l[0]?.title?.rendered!,
      description: l[0]?.content?.rendered!,
      slug: l[0]?.slug!,
      seo: l[0]?.yoast_head,
      picture: await this.getFeaturedImage(l[0].featured_media),
      author: await this.getAuthor(l[0].author),
    }
  }

  async getAuthor(id: number): Promise<{name: string, picture: string}> {
    if (WordpressService.authors[id]) {
      return WordpressService.authors[id];
    }

    const { data } = await wordpress.get(`/wp-json/wp/v2/users/${id}`);
    WordpressService.authors[id] = {
      name: data.name,
      picture: Object.values(data.avatar_urls || [])?.pop() as string,
    };

    return WordpressService.authors[id];
  }

  async getFeaturedImage(id: number): Promise<string> {
    if (!id) {
      return "";
    }

    if (WordpressService.featuredImage[id]) {
      return WordpressService.featuredImage[id];
    }

    const { data } = await wordpress.get(`/wp-json/wp/v2/media/${id}`);
    WordpressService.featuredImage[id] = data?.source_url || '';

    return WordpressService.featuredImage[id];
  }

  async getPostList(page = 1): Promise<Details[]> {
    const list: Root[] = (
      await wordpress.get(`/wp-json/wp/v2/posts?page=${page}&per_page=100`)
    ).data;

    return [
      ...(await Promise.all(
        list.map(async (l) => ({
          title: l.title.rendered,
          description: stripHtml(l.excerpt.rendered).result,
          slug: l.slug,
          picture: await this.getFeaturedImage(l.featured_media),
          author: await this.getAuthor(l.author),
        }))
      )),
      ...(list.length < 100 ? [] : await this.getPostList(page + 1)),
    ];
  }
}
