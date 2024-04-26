import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Lottie from "react-lottie-player";

import { Button } from "@/components/core/Buttons";

import LottieGrid from "@/lottie/Grid.json";

import styles from "./styles.module.css";

const GitRoomPlatformSection = () => {
  return (
    <div
      className={clsx(
        "z-0",
        "git-room-container",
        "flex flex-col",
        "pt-[100px] md:pt-[200px]"
      )}
    >
      <div
        className={clsx(
          "left-[50%] top-[116px] z-[1] translate-x-[-50%]",
          "absolute md:w-[646px] md:h-[646px]"
        )}
        style={{
          background:
            "radial-gradient(circle at 50%, rgba(69,23,255,0.35), transparent 85%)",
        }}
        // radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%);
      >
        {/* <Image
          src="/svgs/Circle1.svg"
          layout="fill"
          objectFit="contain"
          alt="circle"
        /> */}
      </div>

      <div className={clsx("absolute left-0 top-0 w-full z-0")}>
        <Lottie
          play
          loop
          animationData={LottieGrid}
          style={{ width: "100%" }}
        />
      </div>

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
      <div
        className={clsx(
          "z-[1]",
          "mx-auto font-chakra-petch font-[600] text-white text-[28px] leading-[30.8px]",
          "md:text-[44px]"
        )}
      >
        Gitroom Platform
      </div>
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
      >
        Get Started
      </Button>
      <div className={clsx(styles.illustrationWrapper)}></div>
    </div>
  );
};

export default GitRoomPlatformSection;
