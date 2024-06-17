import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

import { IGithubInfo } from "@/types";

import Image from "next/image";

const Title = ({
  title,
  hasGradient = false,
  style = 0,
}: {
  title: string;
  hasGradient?: boolean;
  style?: number;
}) => {
  const styles = [
    "from-[#6298FF] to-[#6B68FF]",
    "from-[#62D9FF] to-[#4081FF]",
    "from-[#CD62FF] to-[#8357FF]",
  ];
  return !hasGradient ? (
    <p className="text-white uppercase font-[500] text-[20.84px] leading-[37.32px] md:text-[20px] lg:text-[26.11px] lg:leading-[46.77px] font-matter text-center group-hover:scale-110 transition-all">
      {title}
    </p>
  ) : (
    <p
      className={clsx(
        "bg-gradient-to-r uppercase font-[700] text-[41.68px] leading-[37.32px] md:text-[45px] lg:text-[52.33px] lg:leading-[46.77px] font-matter text-center bg-clip-text text-transparent group-hover:scale-110 transition-all",
        styles[style]
      )}
    >
      {title}
    </p>
  );
};

interface Props {
  githubInfo: IGithubInfo;
}

const PostCardOne: React.FC<Props> = ({ githubInfo }) => {
  const router = useRouter();

  const style = (githubInfo.style || 0) % 3;

  return (
    <div className="flex justify-center git-room-container">
      <div
        className="w-full max-w-[420px] md:max-w-full flex flex-col md:flex-row rounded-[4px] overflow-hidden border-[#B9C8FF33] border-[1px] relative group cursor-pointer bg-black"
        onClick={() => {
          router.push(`/blog/${2}`);
        }}
      >
        <div
          className="absolute left-[70px] -bottom-[37px] translate-y-[50%] -translate-x-[50%] w-[1000px] h-[1000px] opacity-0 z-[1] group-hover:opacity-50 transition-all"
          style={{
            background:
              "radial-gradient(circle at 50%, #11279E, transparent 60%)",
          }}
        />

        <div className="w-full md:w-[50%] relative h-full">
          <Image
            src={`/svgs/GithubCard${style}.svg`}
            width={420}
            height={267}
            alt="oss header"
            className="w-full h-full object-cover z-[0]"
          />
          <div className="top-0 left-0 absolute w-full h-full flex flex-col gap-[3px] items-center justify-center z-[2]">
            <div className="flex gap-[3px] items-center justify-center mb-[26px] group-hover:scale-110 transition-all">
              <Image
                src={`/svgs/Logo${style}.svg`}
                width={25}
                height={27}
                alt="logo"
              />
              <div className="font-chakra-petch text-white font-bold text-[14px] leading-[18.22px] mt-2">
                Gitroom
              </div>
            </div>
            <Title
              title={githubInfo.headerTitle}
              hasGradient={githubInfo.hasTitleGradient}
              style={style}
            />
            <Title
              title={githubInfo.headerSubTitle}
              hasGradient={githubInfo.hasSubTitleGradient}
              style={style}
            />
          </div>
        </div>
        <div
          className={clsx(
            "flex flex-col gap-4 justify-between w-full md:w-[50%]",
            "py-[24.91px] px-4 md:px-[50px] md:py-[60px]",
            "z-[2]"
          )}
        >
          <div
            className={clsx(
              "font-chakra-petch w-full uppercase",
              "text-[#8EA7FF] font-[700]",
              "text-lg leading-[19.8px]",
              "md:text-[22px] md:leading-[24px]"
            )}
          >
            Latest Post
          </div>
          <div className="flex flex-col gap-5">
            <h4
              className={clsx(
                "font-ibm-plex-sans w-full overflow-hidden text-ellipsis whitespace-nowrap",
                "text-white font-[500]",
                "text-lg leading-[19.8px]",
                "md:text-[25px] md:leading-[27.2px]",
                "lg:text-[30px] lg:leading-[35.2px]"
              )}
            >
              {githubInfo.title}
            </h4>
            <div
              className={clsx(
                "text-white text-[400] line-clamp-2 md:line-clamp-3",
                "text-[15px] leading-[22.5px]",
                "md:text-[20px] md:leading-[30px]"
              )}
            >
              {githubInfo.description}
            </div>
          </div>
          <div className={clsx("flex items-center")}>
            <div
              className={clsx(
                "rounded-full bg-center bg-contain",
                "w-[34px] h-[34px]",
                "lg:w-[35.06px] lg:h-[35.06px]"
              )}
              style={{ backgroundImage: "url(/pngs/person.png)" }}
            ></div>
            <div
              className={clsx(
                "font-[500] text-[rgba(255,255,255,0.8)]",
                "ml-[9.64px] text-sm leading-[18.2px]",
                "lg:text-base lg:leading-[20.8px]"
              )}
            >
              {githubInfo.author}
            </div>
            <div
              className={clsx(
                "mx-[17.53px] w-[1px] h-4 bg-[rgba(255,255,255,0.4)]"
              )}
            ></div>
            <div
              className={clsx(
                "font-[500] text-[rgba(255,255,255,0.6)]",
                "text-sm leading-[18.2px]",
                "lg:text-base lg:leading-[20.8px]"
              )}
            >
              {githubInfo.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCardOne;
