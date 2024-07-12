import RootLayout from "@/components/layouts/RootLayout";
import HomePageContent from "@/components/pages/home";
import { blogService } from "@/services/blog/blog.service";
import { getPageBySlug } from "@/utlis/load.page";
import Head from "next/head";
import parse from "html-react-parser";

export default function Home(props: any) {
  return (
    <RootLayout>
      <Head>{parse(props.meta.metadata)}</Head>
      <HomePageContent blog={props.blog} />
    </RootLayout>
  );
}

export async function getStaticProps() {
  if (!process.env.BLOG_SERVICE) {
    return {
      props: {},
    };
  }

  const meta = await getPageBySlug("home", false);

  return {
    props: {
      blog: (await blogService.getPostList()).slice(0, 3),
      meta
    },
    revalidate: 3600
  };
}
