import React, { FC } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

import GithubCard from "./GithubCard";
import { Button } from "@/components/core/buttons";

const GithubSection: FC<{blog: any[]}> = (props) => {
  const router = useRouter();

  return (
    <div
      className={clsx(
        "mt-10 md:mt-[60.36px]",
        "git-room-container",
        "flex flex-col z-[11]"
      )}
    >
      <div className={"hidden md:flex flex-row gap-[10px] mb-[20px] w-full"}>
        {props.blog.map((item, idx: number) => {
          if (idx >= 3) return null;
          return <GithubCard num={idx} key={idx} githubInfo={item} />;
        })}
      </div>
      <div className="md:hidden mb-[20px] w-full flex justify-center">
        {<GithubCard num={1} githubInfo={props.blog[0]} />}
      </div>
      <Button
        customClasses={clsx(
          "mx-auto mt-10 md:mt-[61.08px] w-[152px] h-[42px] md:[164px] md:h-[48px]"
        )}
        onClick={() => router.push("/blog")}
      >
        Explore Blog
      </Button>
    </div>
  );
};

export default GithubSection;
