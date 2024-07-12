import React, { FC } from "react";
import RootLayout from "@/components/layouts/RootLayout";
import BlogPageContent from "@/components/pages/blog";
import { EnumNavMenus } from "@/types";
import { blogService } from "@/services/blog/blog.service";
import { getPageBySlug } from "@/utlis/load.page";
import Head from "next/head";
import parse from "html-react-parser";

const BlogPage: FC<{blog: any[], meta: any}> = (props) => {
  return (
    <RootLayout activeMenu={EnumNavMenus.Blog}>
      <Head>{parse(props.meta.metadata)}</Head>
      <BlogPageContent blog={props.blog} />
    </RootLayout>
  );
};

export async function getStaticProps() {
  if (!process.env.BLOG_SERVICE) {
    return {
      props: {},
    };
  }

  const meta = await getPageBySlug("blog", false);

  return {
    props: {
      blog: await blogService.getPostList(),
      meta
    },
    revalidate: 3600
  };
}


export default BlogPage;
