import React, { useState } from "react";
import { StayInformedSubscribeSection } from "../home";
import CommunityDealsCardContainer from "./CommunityDealsCardContainer";
import CommunityDealsHeader from "./Header";
import CommunityModal from "./CommunityModal";
import { ICommunityCard } from "@/types";

const CommunityDealsPageContent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCommunity, setSelectedCommunity] =
    useState<ICommunityCard | null>(null);
  return (
    <div className="relative">
      <div className="bg-star-background w-full h-full max-w-[1440px] absolute z-[0] top-0 left-[50%] -translate-x-[50%]" />
      <CommunityDealsHeader />
      <CommunityDealsCardContainer
        onSelectCommunity={(selectedOne: ICommunityCard) => {
          setIsModalOpen(true);
          setSelectedCommunity(selectedOne);
        }}
      />
      <StayInformedSubscribeSection />
      <CommunityModal
        isShow={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCommunity(null);
        }}
      />
    </div>
  );
};

export default CommunityDealsPageContent;
