import React from "react";
import { GetServerSideProps } from "next";

import RootLayout from "@/components/layouts/RootLayout";
import BlogDetailsPageContent from "@/components/pages/blogDetails";
import { EnumNavMenus } from "@/types";
import { blogService } from "@/services/blog/blog.service";
import { Details } from "@/services/blog/blog.interface";
import { shuffle } from "lodash-es";

interface Props {
  blog: any;
  relatedPosts: any[]
}

const BlogPage: React.FC<Props> = ({ blog, relatedPosts }) => {
  return (
    <RootLayout activeMenu={EnumNavMenus.Blog}>
      <BlogDetailsPageContent blog={blog} relatedPosts={relatedPosts} />
    </RootLayout>
  );
};


export async function getStaticPaths() {
  const load = await blogService.getPostList();
  return {
    paths: load.map((p: Details) => ({ params: { id: p.slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(props: { params: { id: string } }) {
  return {
    props: {
      blog: await blogService.getPost(props.params.id),
      relatedPosts: shuffle(await blogService.getPostList()).slice(0, 3),
    }, // will be passed to the page component as props!
    revalidate: 3600
  };
}

export default BlogPage;
