import React from "react";
import clsx from "clsx";

import SubscribeForm from "@/components/common/SubscribeForm";
import LottieWrapper from "@/components/common/LottieWrapper";
import LottieHomeHeader from "@/lottie/Header.json";

import styles from "../styles.module.css";

const HomeHeader = () => {
  return (
    <div className={clsx("relative overflow-visible mb-[92px] lg:mb-[112px]")}>
      <div className={clsx("git-room-container")}>
        <div
          className={clsx("hidden md:block", "-left-[254px] top-[147px] -translate-x-[50%]", "absolute w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] z-[5] opacity-30")}
          style={{
            background: "radial-gradient(circle at 50%, #7B4CFF, transparent 80%)",
          }}
        />
        <div className={clsx(styles.header)}>
          <h1 className={clsx(styles.headerTitle)}>
            Grow Your Open-Source Community
          </h1>
          <div className={clsx(styles.headerSubTitle)}>
            Tools to help you grow your open-source repository. Gain more
            visibility, stars, contributions and customers. Get free weekly
            value by registering to the newsletter.
          </div>
          <SubscribeForm customClasses={"mt-5 md:mt-[30px] md:max-w-[520px]"} />
        </div>
      </div>
      <LottieWrapper
        pic="/hero.jpg"
        path="https://lottie.host/220d7e86-1580-4b0e-9b53-3690abf9fcfc/P1IOZrfxEY.json"
        className="absolute top-0 left-[50%] -translate-x-[63%] md:-translate-x-[50%] w-[1450px] md:w-[2400px]"
      />
    </div>);
};

export default HomeHeader;
