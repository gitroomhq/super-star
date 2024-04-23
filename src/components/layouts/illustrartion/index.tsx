import React from "react";
import clsx from "clsx";

const Illustrartion = ({ customClass }: { customClass?: string }) => {
  return (
    <div
      className={clsx(
        "bg-black",
        "flex flex-col items-center gap-4",
        customClass
      )}
    >
      <h3
        className={clsx(
          "text-white text-center text-[28px] md:text-[44px]",
          "font-semibold font-chakra-petch",
          "max-w-[80%] leading-[110%]"
        )}
      >
        Stay informed, subscribe now!
      </h3>
      <div
        className={clsx(
          "flex flex-col gap-[12px] md:gap-[16px]",
          "max-w-full w-[335px] md:w-[508px]"
        )}
      >
        <div className={clsx("w-full", "relative flex flex-row")}>
          <input
            className={clsx(
              "bg-[#1E1D2D]",
              "text-[14px] md:text-[16px]",
              "w-full",
              "pl-[24px] py-[14.5px] pr-[168px]",
              "rounded-[16px]"
            )}
            type="text"
            placeholder="Enter your e-mail"
          />
          <button
            className={clsx(
              "absolute",
              "font-matter",
              "bg-gradient-to-tr from-white to-[#D1D0FF]",
              "text-[14px] md:text-[16px]",
              "inset-y-[4px] right-[4px]",
              "rounded-[12px]",
              "px-[38.245px]",
              "text-black"
            )}
            type="submit"
          >
            Subscribe
          </button>
        </div>
        <div
          className={clsx(
            "text-white text-center font-matter text-[12px] md:text-[14px]",
            "px-4"
          )}
        >
          <p>
            * Add your email, a video of getting the first 1,000 stars will be
            sent to your email
          </p>
        </div>
      </div>
    </div>
  );
};

export default Illustrartion;
