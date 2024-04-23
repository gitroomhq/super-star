import React from "react";
import clsx from "clsx";
import GithubCard from "./GithubCard";

const GithubSection = () => {
  return (
    <div className={clsx("git-room-container", "flex flex-col")}>
      <GithubCard />
    </div>
  );
};

export default GithubSection;
