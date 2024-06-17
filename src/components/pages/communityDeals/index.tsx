import React, { useState } from "react";

import { StayInformedSubscribeSection } from "../home";
import CommunityDealsCardContainer from "./CommunityDealsCardContainer";
import CommunityDealsHeader from "./Header";
import CommunityModal from "./CommunityModal";
import { ICommunityCard } from "@/types";
import { CommunityCardMockData } from "@/mockData/communityCard";

const CommunityDealsPageContent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [communityCards, setCommunityCards] = useState<ICommunityCard[]>(
    CommunityCardMockData
  );

  const [selectedCommunity, setSelectedCommunity] = useState<number>();
  return (
    <div className="relative">
      <div className="bg-star-background w-full h-full max-w-[1440px] absolute z-[0] top-0 left-[50%] -translate-x-[50%]" />
      <CommunityDealsHeader />
      <CommunityDealsCardContainer
        onSelectCommunity={(id: number) => {
          setIsModalOpen(true);
          setSelectedCommunity(id);
        }}
        communityCards={communityCards}
      />
      <StayInformedSubscribeSection />
      <CommunityModal
        data={communityCards.find((c) => c.id === selectedCommunity)}
        isShow={isModalOpen}
        onApply={() => {
          setCommunityCards((prev) =>
            prev.map((item) =>
              item.id === selectedCommunity ? { ...item, applied: true } : item
            )
          );
        }}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCommunity(undefined);
        }}
      />
    </div>
  );
};

export default CommunityDealsPageContent;
