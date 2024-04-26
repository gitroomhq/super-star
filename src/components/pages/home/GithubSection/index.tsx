import React from "react";
import clsx from "clsx";
import GithubCard from "./GithubCard";

import { GithubInfo } from "@/mockData/github";
import { IGithubInfo } from "@/types";
import { Button } from "@/components/core/Buttons";

const GithubSection = () => {
  return (
    <div
      className={clsx(
        "mt-10 md:mt-[60.36px]",
        "git-room-container",
        "flex flex-col"
      )}
    >
      <div
        className={clsx(
          "flex justify-start items-center md:justify-between flex-col md:flex-row h-[391px] md:h-[460px] overflow-hidden"
        )}
      >
        {GithubInfo.map((item: IGithubInfo, idx: number) => (
          <GithubCard key={idx} githubInfo={item} />
        ))}
      </div>
      <Button
        customClasses={clsx(
          "mx-auto mt-10 md:mt-[61.08px] w-[152px] h-[42px] md:[164px] md:h-[48px]"
        )}
      >
        Explore Blog
      </Button>
    </div>
  );
};

export default GithubSection;
