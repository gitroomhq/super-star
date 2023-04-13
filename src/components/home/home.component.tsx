import { FC, useMemo } from "react";
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
import { NextSeo } from "next-seo";
import { mainPageDetails } from "@github20k/helpers/main.page.details";
import { stripHtml } from "string-strip-html";
import ReactDomServer from "react-dom/server";

const HomeComponent: FC<{ stargazers_count: number }> = (props) => {
  const { stargazers_count } = props;
  const description = useMemo(() => {
    return stripHtml(
      ReactDomServer.renderToString(mainPageDetails.header.description),
      {
        skipHtmlDecoding: true,
      }
    ).result;
  }, [mainPageDetails.header.description]);

  return (
    <>
      <NextSeo
        title={process.env.COURSE_NAME}
        description={description}
        canonical={process.env.COURSE_URL}
        openGraph={{
          url: "https://www.url.ie/a",
          title: process.env.COURSE_NAME,
          description: "Open Graph Description",
          images: [
            {
              url: process.env.COURSE_URL + '/og-image.png',
              width: 1200,
              height: 630,
              alt: process.env.COURSE_NAME,
              type: "image/png",
            }
          ],
          siteName: process.env.COURSE_NAME,
        }}
        twitter={{
          handle: "@nevodavid",
          site: "@nevodavid",
          cardType: "summary_large_image",
        }}
      />
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
