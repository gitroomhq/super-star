import React from "react";
import RootLayout from "@/components/layouts/RootLayout";
import GitRoomPlatFormPageContent from "@/components/pages/gitroomPlatform";
import { getGithubStars } from "@/utlis/get.github.stars";
import { getPageBySlug } from "@/utlis/load.page";
import Head from "next/head";
import parse from "html-react-parser";

const BlogPage: React.FC = (props: any) => {
  return (
    <RootLayout>
      <Head>{parse(props.meta.metadata)}</Head>
      <GitRoomPlatFormPageContent stars={props.stargazers_count} />
    </RootLayout>
  );
};

export async function getStaticProps() {
  const meta = await getPageBySlug("gitroom-platform", false);

  return {
    props: {
      ...(await getGithubStars()),
      meta
    }, // will be passed to the page component as props
    revalidate: 3600
  };
}

export default BlogPage;
