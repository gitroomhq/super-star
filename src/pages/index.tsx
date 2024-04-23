import { clsx } from "clsx";
import {
  CompanyLogoContainer,
  PeopleSaySection,
} from "@/components/pages/home";
import RootLayout from "@/components/layouts/RootLayout";
import Illustrartion from "@/components/layouts/illustrartion";
import StayFormSection from "@/components/pages/home/StayFormSection";
import GithubSection from "@/components/pages/home/GithubSection";

export default function Home() {
  return (
    <RootLayout>
      <div className={clsx("min-h-[300px]")}></div>
      <CompanyLogoContainer />
      <StayFormSection />
      <GithubSection />
      <PeopleSaySection />
      <Illustrartion customClass="pt-[591px] pb-[60px]" />
    </RootLayout>
  );
}
