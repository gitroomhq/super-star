import React from "react";
import RootLayout from "@/components/layouts/RootLayout";
import BlogPageContent from "@/components/pages/blog";
import { EnumNavMenus } from "@/types";

const BlogPage: React.FC = () => {
  return (
    <RootLayout activeMenu={EnumNavMenus.Blog}>
      <BlogPageContent />
    </RootLayout>
  );
};

export default BlogPage;
