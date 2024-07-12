import React, { FC } from "react";
import clsx from "clsx";
import Header from "./Header";
import FrequentlyAskSection from "./FrequentlyAskSection";
import FullyOpenSourceSection from "./FullyOpenSourceSection";
import FlexiblePricingSection from "./FlexiblePricingSection";
import ProvidersSection from "./ProvidersSection";
import MarketPlaceSection from "./MarketPlaceSection";
import TrendsOnGithubSection from "./TrendsOnGithubSection";
import TeamSection from "./TeamSection";
import LaunchesSection from "./LaunchesSection";
import GitRoomCommunitySection from "@/components/common/GitRoomCommunitySection";
import { CompanyLogoContainer, StayInformedSubscribeSection } from "../home";

const GitRoomPlatformPageContent: FC<{stars: number}> = (props) => {
  return (
    <div className="relative">
      <div className="bg-star-background w-full h-full max-w-[1440px] absolute z-[0] top-0 left-[50%] -translate-x-[50%]" />
      <Header />
      <CompanyLogoContainer />
      <TrendsOnGithubSection />
      <LaunchesSection />
      <TeamSection />
      <MarketPlaceSection />
      <ProvidersSection />
      <FlexiblePricingSection />
      <FullyOpenSourceSection stars={props.stars} />
      <FrequentlyAskSection />
      <GitRoomCommunitySection
        customClasses={clsx("mt-[100px] md:mt-[200px]")}
      />
      <StayInformedSubscribeSection />
    </div>
  );
};

export default GitRoomPlatformPageContent;
