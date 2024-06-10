import React from "react";
import RootLayout from "@/components/layouts/RootLayout";
import { EnumNavMenus } from "@/types";
import OSSFriendsPageContent from "@/components/pages/ossFriends";

const OSSFriendsPage = () => {
  return (
    <RootLayout activeMenu={EnumNavMenus.OSSFriends}>
      <OSSFriendsPageContent />
    </RootLayout>
  );
};

export default OSSFriendsPage;
