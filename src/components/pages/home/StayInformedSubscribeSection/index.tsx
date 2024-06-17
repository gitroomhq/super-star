import React from "react";
import clsx from "clsx";

import SubscribeForm from "@/components/common/SubscribeForm";
import LottieWrapper from "@/components/common/LottieWrapper";
import LottieHomeFooter from "@/lottie/HomeFooter.json";

const StayInformedSubscribeSection = () => {
  return (
    <div
      className={clsx(
        "git-room-container overflow-x-hidden sm:overflow-x-visible",
        "bg-black",
        "flex flex-col items-center gap-4",
        // "mt-[100px]",
        "lg:mt-[20px]",
        "z-0"
      )}
    >
      <div
        className={clsx(
          "z-0",
          "relative w-full flex items-center justify-center",
          "w-[768px]",
          "mt-[-30px] md:mt-[90px] lg:mt-[-50px] sm:w-[960px] h-[400px]",
          "lg:h-[700px]"
        )}
      >
        <LottieWrapper
          animationData={LottieHomeFooter}
          className={clsx(
            "absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]",
            "w-[768px] h-[700px] md:w-[1400px] md:h-[1400px]"
          )}
        />
      </div>
      <h3
        className={clsx(
          "z-[1]",
          "text-white text-center text-[28px] md:text-[44px]",
          "font-semibold font-chakra-petch",
          "max-w-[330px] leading-[110%]",
          "mt-0 mb-5",
          "md:mt-[140px] md:max-w-full",
          "lg:mt-[-10px]"
        )}
      >
        Stay informed, subscribe for the newsletter now!
      </h3>
      <SubscribeForm />
    </div>
  );
};

export default StayInformedSubscribeSection;
