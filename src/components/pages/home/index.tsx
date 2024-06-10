import clsx from "clsx";
import HomeHeader from "./Header";
import CompanyLogoContainer from "./CompanyLogoContainer";
import PeopleSaySection from "./PeopleSaySection";
import SubscribeSection from "./SubscribeSection";
import GitRoomPlatformSection from "./GitRoomPlatformSection";
import StayInformedSubscribeSection from "./StayInformedSubscribeSection";
import StayFormSection from "./StayFormSection";
import GithubSection from "./GithubSection";
import GitRoomCommunitySection from "@/components/common/GitRoomCommunitySection";

export {
  HomeHeader,
  CompanyLogoContainer,
  PeopleSaySection,
  SubscribeSection,
  GitRoomPlatformSection,
  StayInformedSubscribeSection,
  StayFormSection,
  GithubSection,
};

const HomePageContent = () => {
  return (
    <>
      <HomeHeader />
      <div className="relative">
        <div className="bg-star-background w-full h-full max-w-[1440px] absolute z-[0] top-0 left-[50%] -translate-x-[50%]" />
        <CompanyLogoContainer />
        <StayFormSection />
        <GithubSection />
        <PeopleSaySection />
        <SubscribeSection />
        <GitRoomPlatformSection />
        <GitRoomCommunitySection
          customClasses={clsx("mt-[112px] md:mt-[217px]")}
        />
        <StayInformedSubscribeSection />
      </div>
    </>
  );
};

export default HomePageContent;
