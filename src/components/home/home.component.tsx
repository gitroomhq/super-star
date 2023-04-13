import { FC } from "react";
import NavigationComponent from "@github20k/components/home/navigation.component";
import HeroComponent from "@github20k/components/home/hero.component";
import AboutComponent from "@github20k/components/home/about.component";
import TestimonialsComponent from "@github20k/components/home/testimonials.component";
import StarsCourseComponent from "@github20k/components/home/stars.course.component";
import RecordingWithCompaniesComponent from "@github20k/components/home/recording.with.companies.component";
import PersonalMeetingComponent from "@github20k/components/home/personal.meeting.component";
import TechnicalContentComponent from "@github20k/components/home/technical.content.component";
import GetItNowComponent from "@github20k/components/home/get.it.now.component";
import FaqComponent from "@github20k/components/home/faq.component";
import FooterComponent from "@github20k/components/home/footer.component";

const HomeComponent: FC<{ stargazers_count: number }> = (props) => {
  const { stargazers_count } = props;
  return (
    <>
      <NavigationComponent stars={stargazers_count} />
      <main>
        <HeroComponent />
        <div className="relative bg-about-bg bg-cover lg:bg-contain bg-center bg-no-repeat">
          <AboutComponent />
          <TestimonialsComponent />
        </div>
        <StarsCourseComponent />
        <RecordingWithCompaniesComponent />
        <PersonalMeetingComponent />
        <TechnicalContentComponent />
        <GetItNowComponent />
        <FaqComponent />
      </main>
      <FooterComponent />
    </>
  );
};

export default HomeComponent;
