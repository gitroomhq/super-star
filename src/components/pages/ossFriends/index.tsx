import React from "react";
import OSSFriendsHeader from "./Header";
import OSSCardsContainer from "./OSSCardsContainer";
import { StayInformedSubscribeSection } from "../home";

const OSSFriendsPageContent = () => {
  return (
    <div className="relative">
      <div className="bg-star-background w-full h-full max-w-[1440px] absolute z-[0] top-0 left-[50%] -translate-x-[50%]" />
      <OSSFriendsHeader />
      <OSSCardsContainer />
      <StayInformedSubscribeSection />
    </div>
  );
};

export default OSSFriendsPageContent;
