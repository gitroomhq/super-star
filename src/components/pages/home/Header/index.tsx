import React from "react";
import clsx from "clsx";
import { SubscribeForm } from "@/components/common";

const HomeHeader = () => {
  return (
    <div className={clsx("git-room-container", "mt-[284px]")}>
      <div className={clsx("flex flex-col w-full")}>
        <div
          className={clsx(
            "font-chakra-petch text-white font-[600] text-[48px] leading-[48px] w-full max-w-[335px]",
            "md:text-[90px] md:leading-[90px] md:max-w-[615px]"
          )}
        >
          Grow Your Open-Source Community
        </div>
        <div
          className={clsx(
            "mt-6 text-white text-[400]",
            "w-full max-w-[335px]",
            "text-sm leading-[16.8px]",
            "md:mt-[90px] md:text-base md:leading-[19.2px] md:max-w-[520px]"
          )}
        >
          Tools to help your grow your open-source repository. Gain more
          visibility, stars, contributions and customers. Get free weekly value
          by registering to the newsletter.
        </div>
        <SubscribeForm customClasses={"mt-5 md:mt-[30px] md:max-w-[520px]"} />
      </div>
    </div>
  );
};

export default HomeHeader;
