import dayjs from "dayjs";
import sanitizeHtml from "sanitize-html";
import { basic } from "@/utlis/basic";

export const getAllPages = async () => {
  const value = (
    await (
      await fetch(
        `https://cms.gitroom.com/wp-json/wp/v2/pages?_fields[]=slug&per_page=100`,
        {
          headers: {
            Authorization: basic,
          },
        }
      )
    ).json()
  ).filter((page: { slug: string }) => page.slug !== "home" &&  page.slug !== "tools" && page.slug !== "blog");

  return value;
};

export const getPageBySlug = async (slug: string, ignoreHome = true, type = 'pages') => {
  const [page] = await (
    await fetch(`https://cms.gitroom.com/wp-json/wp/v2/${type}?slug=${slug}`, {
      headers: {
        Authorization: basic,
      },
    })
  ).json();

  if (ignoreHome && page.yoast_head_json.canonical.indexOf(page.slug) === -1) {
    return false;
  }

  return {
    slug: page.slug || "",
    date: dayjs(page.date).format("MMMM D, YYYY") || "",
    title: page?.title?.rendered || "",
    image: page?.yoast_head_json?.og_image?.[0]?.url || "",
    content: sanitizeHtml(page.content.rendered),
    metadata: page.yoast_head,
  };
};
