import React from "react";
import clsx from "clsx";
import Image from "next/image";

import SectionTitle from "@/components/core/SectionTitle";
import SectionSubTitle from "@/components/core/SectionSubTitle";
import LottieWrapper from "@/components/common/LottieWrapper";
import LottieLaunchLeft from "@/lottie/LaunchesLeft.json";
import LottieLaunchRight from "@/lottie/LaunchesRight.json";
import LaunchMobile from "@/lottie/LaunchMobile.json";

const PurpleShadow = () => (
  <>
    {/* Light - First Light */}
    <div
      className={clsx(
        "absolute left-[0%] top-[100%]",
        "-translate-x-[calc(50%)] -translate-y-[calc(50%)]",
        "md:-translate-x-[calc(50%-150px)] md:-translate-y-[calc(50%+100px)]",
        "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] z-[2]"
      )}
    >
      <div
        className={clsx(
          "absolute",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-20 scale-y-75"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #278AE5, transparent 60%)",
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
          "-translate-x-[150px] -translate-y-[100px]",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-15 scale-y-75"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #4C9AE0, transparent 70%)",
        }}
      />
      <div
        className={clsx(
          "absolute",
          "translate-y-[200px]",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-10 scale-y-75"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #3161B5, transparent 70%)",
        }}
      />
    </div>
  </>
);

const LaunchesSection = () => {
  return (
    <div className={clsx("overflow-visible w-full")}>
      <div
        className={clsx(
          "git-room-container",
          "flex flex-col items-center !px-0"
        )}
      >
        <div
          className={clsx(
            "relative mx-auto w-[30.88px] h-[30.88px] mt-[80px] px-5",
            "md:mt-[140px] md:w-[42px] md:h-[42px]"
          )}
        >
          <Image
            src="/svgs/LaunchesSectionIcon.svg"
            layout="fill"
            objectFit="contain"
            alt="trends on github and anayltics"
          />
        </div>
        <SectionTitle customClasses={clsx("mt-[29.56px] md:mt-[37px] px-5")}>
          Launches
        </SectionTitle>
        <SectionSubTitle customClasses={clsx("mt-5 max-w-[606px] px-5")}>
          {`Keep yourself consistently informed about the newest launches and
        updates emanating from GitRoom, ensuring you're at the forefront of
        every development. Be the inaugural recipient of insights into the
        latest features, enhancements, and advancements designed to augment and
        refine your development journey.`}
        </SectionSubTitle>
        <div
          className={clsx("hidden md:flex flex-col sm:flex-row mt-[55.6px]")}
        >
          <LottieWrapper
            animationData={LottieLaunchLeft}
            className="-translate-x-[7%] sm:translate-x-0"
          />
          <LottieWrapper
            animationData={LottieLaunchRight}
            className="translate-x-[7%] sm:translate-x-0"
          />
        </div>
        <div className="mt-[55.6px] md:hidden">
          <LottieWrapper animationData={LaunchMobile} />
        </div>
        <PurpleShadow />
      </div>
    </div>
  );
};

export default LaunchesSection;
