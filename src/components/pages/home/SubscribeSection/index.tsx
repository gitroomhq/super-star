import { SubscribeForm } from "@/components/common";
import { SubscribeSvg } from "@/components/svgs";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const SubscribeSection: React.FC = () => {
  return (
    <div
      className={clsx(
        "mt-[100px] md:mt-[200px] git-room-container",
        "flex flex-col"
      )}
    >
      <div
        className={clsx("mx-auto w-[50px] h-[50px] md:w-[68px] md:h-[68px]")}
      >
        <SubscribeSvg />
      </div>
      <div
        className={clsx(
          "text-white mx-auto mt-3 md:mt-6 w-full max-w-[335px] md:max-w-full",
          "font-chakra-petch font-[600] text-[28px] leading-[30.8px] text-center",
          "md:text-[44px] md:leading-[48.4px]"
        )}
      >
        Subscribe Now to Receive Weekly Tips
      </div>
      <div className="mx-auto mt-10 md:mt-[60px]">
        <SubscribeForm />
      </div>
    </div>
  );
};

export default SubscribeSection;
