import React from "react";
import RootLayout from "@/components/layouts/RootLayout";
import CommunityDealsPageContent from "@/components/pages/communityDeals";
import { EnumNavMenus } from "@/types";

const BlogPage: React.FC = () => {
  return (
    <RootLayout activeMenu={EnumNavMenus.CommuntyDeals}>
      <CommunityDealsPageContent />
    </RootLayout>
  );
};

export default BlogPage;
