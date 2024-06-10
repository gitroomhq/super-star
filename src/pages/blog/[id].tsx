import React from "react";
import { GetServerSideProps } from "next";

import RootLayout from "@/components/layouts/RootLayout";
import BlogDetailsPageContent from "@/components/pages/blogDetails";
import { EnumNavMenus } from "@/types";

interface Props {
  blogId: string;
}

const BlogPage: React.FC<Props> = ({ blogId }) => {
  return (
    <RootLayout activeMenu={EnumNavMenus.Blog}>
      <BlogDetailsPageContent blogId={blogId} />
    </RootLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (params: any) => {
  return { props: { blogId: params.id || "" } };
};
export default BlogPage;
