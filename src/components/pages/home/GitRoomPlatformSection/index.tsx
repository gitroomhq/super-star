import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";

import { Button } from "@/components/core/buttons";
import LottieWrapper from "@/components/common/LottieWrapper";
import LottieGrid from "@/lottie/Grid.json";
import LottieGridMobile from "@/lottie/Grid-mobile.json";

const GitRoomPlatformSection = () => {
  const router = useRouter();

  return (
    <div
      className={clsx(
        "z-0",
        "git-room-container",
        "flex flex-col",
        "pt-[120px] md:pt-[200px] !pl-[18px] !pr-[17px]",
        "md:mt-10 overflow-hidden"
      )}
    >
      <div
        className={clsx(
          "left-[50%] top-[50px] md:top-[100px] translate-x-[-50%]",
          "absolute w-full h-[600px] md:h-[1000px] z-[1]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, rgba(69,23,255,0.35), transparent 70%)",
        }}
      />

      <LottieWrapper
        animationData={LottieGridMobile}
        className="absolute top-0 left-[50%] -translate-x-[50%] w-[100%] z-0 sm:hidden"
      />
      <LottieWrapper
        animationData={LottieGrid}
        className="hidden sm:block absolute top-0 left-[50%] -translate-x-[50%] sm:w-[calc(100%+40px)] md:w-[calc(100%+80px)] lg:w-[calc(100%+115px)] z-0"
      />

      <div
        className={clsx(
          "z-[1]",
          "mx-auto relative flex justify-center items-center",
          "w-[50px] h-[50px] md:w-[68px] md:h-[68px]"
        )}
      >
        <Image
          src="/svgs/Logo68.svg"
          layout="fill"
          objectFit="contain"
          alt="Logo"
        />
      </div>
      <h3
        className={clsx(
          "z-[1]",
          "mx-auto font-chakra-petch font-[600] text-white text-[28px] leading-[30.8px]",
          "md:text-[44px]"
        )}
      >
        Gitroom Platform
      </h3>
      <div
        className={clsx(
          "z-[1] text-center",
          "mx-auto mt-5 w-full max-w-[319px] md:max-w-[682px] text-white text-sm font-matter",
          "md:text-base"
        )}
      >
        {`Boost your open-source project's visibility and growth: trend on GitHub,
        leverage influencers, write compelling marketing materials. Master
        communication, find writers, use badges.`}
      </div>
      <Button
        customClasses={clsx(
          "z-0",
          "mx-auto mt-[35.21px] md:mt-12",
          "w-[152px] h-[42px]",
          "md:w-[164px] md:h-[48px]",
          "z-[1]"
        )}
        onClick={() => router.push("https://platform.gitroom.com/")}
      >
        Get Started
      </Button>
      {/* <div className={clsx(styles.illustrationWrapper)}></div> */}

      <div className="w-full flex overflow-hidden relative mt-10 md:mt-[90px]">
        <div className="relative min-w-[482px] mx-5 md:mx-[65px] px-[6px] pt-[6px] md:px-4 md:pt-4 border-[1px] border-[#7B6FFF33] border-b-0 rounded-t-[16px] md:rounded-t-[40px] overflow-hidden">
          <div
            className={clsx(
              "left-[50%] translate-x-[-50%] -translate-y-[calc(50%-50px)]",
              "absolute w-[800px] h-[600px] md:w-[1200px] md:h-[1200px] scale-y-50 opacity-20"
            )}
            style={{
              background:
                "radial-gradient(circle at 50%, #FFF, transparent 60%)",
            }}
          />
          <Image
            src="/pngs/Illustrtion.svg"
            width={1118}
            height={596}
            alt="Illustration"
            className="z-[2] relative opacity-100"
          />
        </div>

        {/* Black Shadow */}
        <div className="absolute bottom-0 left-0 w-full h-[57px] md:h-[218px] bg-illustration-mask-b z-[4]" />
        <div className="h-full w-[57px] xs:hidden right-0 top-0 absolute bg-illustration-mask-r z-[4]" />
      </div>
    </div>
  );
};

export default GitRoomPlatformSection;
