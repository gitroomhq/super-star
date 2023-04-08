import { BlogComponent } from "@github20k/components/blog/blog.component";
import { getGithubStars } from "@github20k/helpers/get.github.stars";
import { blogService } from "@github20k/services/blog/blog.service";
import {Details} from "@github20k/services/blog/blog.interface";

export default function Index(props: { stargazers_count: number, blog: Details[] }) {
  return <BlogComponent stargazers_count={props.stargazers_count} blog={props.blog} />;
}

export async function getStaticProps(context) {
  if (!process.env.BLOG_SERVICE) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    }
  }

  return {
    props: {
      ...(await getGithubStars()),
      blog: await blogService.getPostList(),
    }, // will be passed to the page component as props
  };
}
