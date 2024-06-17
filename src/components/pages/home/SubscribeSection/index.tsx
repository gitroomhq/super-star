import React from "react";
import clsx from "clsx";

import SubscribeForm from "@/components/common/SubscribeForm";
import IconContainer from "@/components/common/IconContainer";

const SubscribeSection: React.FC = () => {
  return (
    <div
      className={clsx(
        "mt-[100px] md:mt-[200px] git-room-container",
        "flex flex-col items-center"
      )}
    >
      <IconContainer
        iconSrc="/svgs/Subscribe.svg"
        className="w-[28px] h-[24px] md:w-[38px] md:h-[32px] mx-auto"
        width={50}
        height={50}
        alt="subscribe"
        hasGradient
        gradientColor="#6F52E5"
      />
      <h3
        className={clsx(
          "text-white mx-auto mt-3 md:mt-6 w-full max-w-[335px] md:max-w-full",
          "font-chakra-petch font-[600] text-[28px] leading-[30.8px] text-center",
          "md:text-[44px] md:leading-[48.4px]"
        )}
      >
        Subscribe Now to Receive Weekly Tips
      </h3>
      <SubscribeForm customClasses="mt-10 md:mt-[60px]" />
    </div>
  );
};

export default SubscribeSection;
