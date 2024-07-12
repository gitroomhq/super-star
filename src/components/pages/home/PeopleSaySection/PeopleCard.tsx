import React from "react";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  logo: { src: string; width?: number; height?: number };
  description: string;
  person: {
    imgSrc: string;
    name: string;
    role: string;
    company: string;
    link: string;
  };
}

const PeopleCard: React.FC<Props> = ({
  logo: { src: logo, width = 80, height = 80 },
  description,
  person,
}) => {
  return (
    <div className="w-full mx-[5px] bg-black rounded-[4px] relative border-[#CBCAFF] border-[1px] border-opacity-15 overflow-hidden">
      <Image
        src={`/svgs/PeopleCard.svg`}
        width={420}
        height={267}
        alt="oss header"
        className="w-full absolute top-0"
      />
      <div className="w-full h-[291px] p-[30px] flex flex-col gap-[30px]">
        <div className="h-20">
          <Image src={logo} width={width} height={height} alt="" />
        </div>
        <div className="flex-1">
          <p className="text-white text-sm leading-[16.8px] font-matter">
            {description}
          </p>
        </div>
        <div className="flex">
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
                "font-chakra-petch font-semibold text-base text-white leading-[21px]"
              )}
            >
              {person.name}
            </div>
            <div
              className={clsx(
                "mt-[3px]",
                "font-matter font-normal text-[13px] text-white leading-[16px]"
              )}
            >
              <span>{person.role}</span>
              <span>&nbsp;@&nbsp;</span>
              <Link
                href={person.link}
                target="_blank"
                className="underline hover:text-[#B385FF] transition-all"
              >
                {person.company}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
