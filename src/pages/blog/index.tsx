import { BlogComponent } from "@github20k/components/blog/blog.component";
import { getGithubStars } from "@github20k/helpers/get.github.stars";
import { blogService } from "@github20k/services/blog/blog.service";
import { Details } from "@github20k/services/blog/blog.interface";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Index(props: {
  stargazers_count: number;
  blog: Details[];
}) {
  const router = useRouter();

  useEffect(() => {
    if (!props.blog) {
      router.push("/");
    }
  }, []);

  return (
    <>
      {props.blog ? (
        <BlogComponent
          stargazers_count={props.stargazers_count}
          blog={props.blog}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export async function getStaticProps() {
  if (!process.env.BLOG_SERVICE) {
    return {
      props: {},
    };
  }

  return {
    props: {
      ...(await getGithubStars()),
      blog: await blogService.getPostList(),
    },
    revalidate: 3600
  };
}
