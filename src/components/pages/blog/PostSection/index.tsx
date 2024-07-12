import React from "react";
import PostCardOne from "./PostCardOne";
import GithubContainer from "./GithubContainer";

const PostSection: React.FC<{blog: any[]}> = (props) => {
  const [firstPost, ...restPosts] = props.blog;

  return (
    <>
      <PostCardOne blog={firstPost} />
      <GithubContainer blog={restPosts} />
    </>
  );
};
export default PostSection;
