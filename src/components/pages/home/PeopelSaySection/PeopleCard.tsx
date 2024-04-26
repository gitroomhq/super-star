import React from "react";
import { clsx } from "clsx";
import Image from "next/image";

import styles from "./styles.module.css";

interface Props {
  logoSrc: string;
  description: string;
  person: { imgSrc: string; name: string; address: string };
}

const PeopleCard: React.FC<Props> = ({ logoSrc, description, person }) => {
  return (
    <div className={clsx(styles.peopleCard)}>
      <div
        className={clsx(
          "relative",
          "w-full h-[60px]",
          "bg-left-top bg-no-repeat bg-contain"
        )}
        style={{ backgroundImage: `url(${logoSrc})` }}
      ></div>
      <div className={clsx("mt-[30px]", "font-matter text-white text-sm")}>
        {description}
      </div>
      <div className={clsx("mt-[30px]", "flex")}>
        <div
          className={clsx(
            "relative w-10 h-10",
            "rounded-xl",
            "overflow-hidden"
          )}
        >
          <Image
            src={person.imgSrc}
            layout="fill"
            objectFit="contain"
            alt={person.name}
          />
        </div>
        <div className={clsx("ml-3", "flex flex-col")}>
          <div
            className={clsx(
              "font-chakra-petch font-semibold text-regular text-white leading-[21px]"
            )}
          >
            {person.name}
          </div>
          <div
            className={clsx(
              "mt-[3px]",
              "font-matter font-regular text-[13px] text-white leading-[16px]"
            )}
          >
            {person.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
