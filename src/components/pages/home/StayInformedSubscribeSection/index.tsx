import React from "react";
import clsx from "clsx";

import { SubscribeForm } from "@/components/common";

const StayInformedSubscribeSection = () => {
  return (
    <div
      className={clsx(
        "git-room-container",
        "bg-black",
        "flex flex-col items-center gap-4"
      )}
    >
      <div
        className={clsx(
          "mt-[213px]",
          "text-white text-center text-[28px] md:text-[44px]",
          "font-semibold font-chakra-petch",
          "max-w-[80%] leading-[110%]"
        )}
      >
        Stay informed, subscribe now!
      </div>
      <SubscribeForm />
    </div>
  );
};

export default StayInformedSubscribeSection;
