import { clsx } from "clsx";
import {
  CompanyLogoContainer,
  GitRoomCommunitySection,
  GitRoomPlatformSection,
  PeopleSaySection,
  StayInformedSubscribeSection,
  SubscribeSection,
  StayFormSection,
  GithubSection,
  HomeHeader,
} from "@/components/pages/home";
import RootLayout from "@/components/layouts/RootLayout";

export default function Home() {
  return (
    <RootLayout>
      <HomeHeader />
      <CompanyLogoContainer />
      <StayFormSection />
      <GithubSection />
      <PeopleSaySection />
      <SubscribeSection />
      <GitRoomPlatformSection />
      <GitRoomCommunitySection />
      <StayInformedSubscribeSection />
    </RootLayout>
  );
}
