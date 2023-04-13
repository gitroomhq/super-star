import { FC, useMemo } from "react";
import NavigationComponent from "@github20k/components/home/navigation.component";
import HeroComponent from "@github20k/components/home/hero.component";
import FooterComponent from "@github20k/components/home/footer.component";
import { NextSeo } from "next-seo";
import { mainPageDetails } from "@github20k/helpers/main.page.details";
import { stripHtml } from "string-strip-html";
import ReactDomServer from "react-dom/server";
import SuccessHeroComponent from "@github20k/components/home/success.hero.component";

const SuccessComponent: FC<{ stargazers_count: number }> = (props) => {
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
          url: process.env.COURSE_URL,
          title: process.env.COURSE_NAME,
          description: description,
          images: [
            {
              url: process.env.COURSE_URL + "/og-image.png",
              width: 1200,
              height: 630,
              alt: process.env.COURSE_NAME,
              type: "image/png",
            },
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
        <SuccessHeroComponent />
      </main>
      <FooterComponent />
    </>
  );
};

export default SuccessComponent;
