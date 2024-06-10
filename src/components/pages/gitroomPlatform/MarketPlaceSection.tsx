import React from "react";
import clsx from "clsx";
import Image from "next/image";

import SectionTitle from "@/components/core/SectionTitle";
import LottieMarketPlace from "@/lottie/Marketplace.json";
import LottieMarketPlaceMobile from "@/lottie/MarketplaceMobile.json";
import LottieWrapper from "@/components/common/LottieWrapper";

const PurpleShadow = () => (
  <>
    {/* Light - First Light */}
    <div
      className={clsx(
        "absolute left-[0%] top-[80%]",
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
            "radial-gradient(circle at 50%, #3300FF, transparent 70%)",
        }}
      />
    </div>

    {/* Light - Second Light */}
    <div
      className={clsx(
        "absolute left-[100%] top-[50%]",
        "-translate-x-[calc(50%)] -translate-y-[calc(50%)]",
        "md:-translate-x-[calc(50%+150px)] md:-translate-y-[calc(50%-50px)]",
        "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] z-[0]"
      )}
    >
      <div
        className={clsx(
          "absolute",
          "translate-x-[100px] translate-y-[100px]",
          "md:-translate-x-[150px] md:translate-y-[0px]",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-10 scale-y-75"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #FF0000, transparent 70%)",
        }}
      />
      <div
        className={clsx(
          "absolute",
          "translate-x-[200px] translate-y-[40px]",
          "w-[700px] h-[700px] md:w-[1500px] md:h-[1500px] opacity-10 scale-y-75"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, #094EFF, transparent 70%)",
        }}
      />
    </div>
  </>
);

const MarketPlaceSection = () => {
  return (
    <div
      className={clsx(
        "git-room-container",
        "flex flex-col",
        "pt-[80px] md:pt-[140px] !px-0"
      )}
    >
      <div className={clsx("relative mx-auto w-[42px] h-[42px] px-5")}>
        <Image
          src="/svgs/MarketPlaceSectionIcon.svg"
          layout="fill"
          objectFit="contain"
          alt="Markteplace Section Icon"
        />
      </div>
      <SectionTitle
        customClasses={clsx("mx-auto mt-[29.56px] md:mt-37px px-5")}
      >
        Marketplace
      </SectionTitle>
      <div
        className={clsx(
          "mx-auto text-center sm:w-[575px] font-matter font-[400] text-[rgba(255,255,255,0.9)]",
          "mt-5 text-base leading-[19.2px] z-[2] px-5"
        )}
      >
        Embark on an extensive journey through our vast marketplace,
        custom-tailored to meet your development needs. Uncover a myriad of
        essential tools, plugins, and resources meticulously selected to amplify
        and refine your workflow, empowering you to achieve greater efficiency
        and productivity.
      </div>
      <LottieWrapper
        animationData={LottieMarketPlace}
        className="mt-8 hidden md:block"
      />
      <LottieWrapper
        animationData={LottieMarketPlaceMobile}
        className="mt-8 md:hidden"
      />

      <PurpleShadow />
    </div>
  );
};

export default MarketPlaceSection;
