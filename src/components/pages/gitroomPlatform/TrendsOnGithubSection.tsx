import React from "react";
import clsx from "clsx";
import Image from "next/image";

import SectionTitle from "@/components/core/SectionTitle";
import SectionSubTitle from "@/components/core/SectionSubTitle";
import LottieWrapper from "@/components/common/LottieWrapper";
import LottieTrends from "@/lottie/Trends.json";
import LottieTrendsMobile from "@/lottie/Trends-mobile.json";
import IconContainer from "@/components/common/IconContainer";

const PurpleShadow = () => (
  <>
    {/* Light - First Light */}
    <div
      className={clsx(
        "absolute left-[0%] top-[100%]",
        "-translate-x-[calc(50%)] -translate-y-[calc(50%)]",
        "md:-translate-x-[calc(50%-100px)] md:-translate-y-[calc(50%+100px)]",
        "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] z-[2]"
      )}
    >
      <div
        className={clsx(
          "absolute",
          "-translate-y-[100px]",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-15 scale-y-75"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #0094FF, transparent 70%)",
        }}
      />
      <div
        className={clsx(
          "absolute",
          "translate-x-[200px] translate-y-[400px]",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-10 scale-y-75"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #1F3CD6, transparent 70%)",
        }}
      />
    </div>

    {/* Light - Second Light */}
    <div
      className={clsx(
        "absolute left-[100%] top-[50%]",
        "-translate-x-[calc(50%)] -translate-y-[calc(50%)]",
        "md:-translate-x-[calc(50%)] md:-translate-y-[calc(50%)]",
        "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] z-[0]"
      )}
    >
      <div
        className={clsx(
          "absolute",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-20 scale-y-75"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #2447FF, transparent 70%)",
        }}
      />
    </div>
  </>
);

const TrendsOnGithubSection = () => {
  return (
    <div
      className={clsx(
        "git-room-container",
        "flex flex-col items-center",
        "mt-[100px] md:mt-[160px]"
      )}
    >
      <IconContainer
        iconSrc="/svgs/TrendsOnGitHubSectionIcon.svg"
        className="w-[30.88px] h-[30.88px] md:w-[42px] md:h-[42px] mx-auto"
        width={50}
        height={50}
        alt="subscribe"
        hasGradient
        gradientColor="#68A4FF"
      />

      <SectionTitle
        customClasses={clsx(
          "w-full mt-[29.5px] max-w-[283px]",
          "md:mt-[37px] md:max-w-full"
        )}
      >
        Trends on GitHub and analytics
      </SectionTitle>
      <SectionSubTitle customClasses={clsx("mt-5 w-full max-w-[700px]")}>
        {`Boost your open-source project's visibility and growth: trend on GitHub,
        leverage influencers, write compelling marketing materials. Master
        communication, find writers, use badges.`}
        <br />
        <br />
        {`Gain valuable insights into your project's performance with our
        comprehensive analytics dashboard. Track key metrics, monitor
        engagement, and make informed decisions to drive success.`}
      </SectionSubTitle>
      <LottieWrapper animationData={LottieTrends} className="hidden sm:block" />
      <LottieWrapper
        animationData={LottieTrendsMobile}
        className="block sm:hidden"
      />

      <PurpleShadow />
    </div>
  );
};

export default TrendsOnGithubSection;
