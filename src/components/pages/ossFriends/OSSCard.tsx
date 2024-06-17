import React from "react";
import clsx from "clsx";
import { IOSSCard } from "@/types";

import styles from "./styles.module.css";
import Link from "next/link";
import { GoIntoSvg, StarSvg } from "@/components/svgs";

interface Props {
  customClasses?: string;
  cardInfo: IOSSCard;
}

const OSSCard: React.FC<Props> = ({ customClasses = "", cardInfo }) => {
  return (
    <div className={clsx(styles.ossCard, customClasses)}>
      <div className={"flex justify-between"}>
        <div
          className={clsx("w-10 h-10 bg-center bg-contain ronded-[10px]")}
          style={{ backgroundImage: `url(${cardInfo.logoSrc})` }}
        ></div>
        <div
          className={clsx(
            "flex items-center text-white font-matter font-[400]",
            "text-sm leading-[18px]",
            "lg:text-base"
          )}
        >
          <div className={clsx("w-[34px] h-[34px]")}>
            <StarSvg />
          </div>
          {cardInfo.rating}
        </div>
      </div>
      <h4
        className={clsx(
          "text-white font-chakra-petch font-[500]",
          "mt-5 text-[28px] leading-[30.8px]",
          "lg:mt-6 lg:text-[32px] lg:leading-[35.2px]"
        )}
      >
        {cardInfo.title}
      </h4>
      <div
        className={clsx(
          "font-matter font-[400] text-white",
          "mt-5 text-[13px] leading-[15.6px]",
          "lg:mt-6 lg:text-sm lg:leading-[16.8px]"
        )}
      >
        {cardInfo.description}
      </div>
      <Link
        className={clsx(
          "flex items-center",
          "mt-auto text-[rgba(176,148,255,1)] hover:text-[rgba(217,193,255,1)] font-[400] font-matter transition-all",
          "text-sm leading-[16.8px]",
          "lg:text-base lg:leading-[19.2px]"
        )}
        href={`https://${cardInfo.link}`}
        target="_blank"
      >
        <div className={clsx("w-5 h-5 mr-2")}>
          <GoIntoSvg />
        </div>
        <div className={clsx("underline")}>{cardInfo.link}</div>
      </Link>
    </div>
  );
};

export default OSSCard;
