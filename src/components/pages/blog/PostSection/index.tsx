import React from "react";
import clsx from "clsx";
import PostCardOne from "./PostCardOne";
import GithubContainer from "./GithubContainer";
import { GithubInfo } from "@/mockData/github";

const PostSection: React.FC = () => {
  const data = GithubInfo[GithubInfo.length - 1];

  return (
    <>
      <PostCardOne githubInfo={data} />
      <GithubContainer />
    </>
  );
};
export default PostSection;
