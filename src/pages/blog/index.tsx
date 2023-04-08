import { BlogComponent } from "@github20k/components/blog/blog.component";
import { getGithubStars } from "@github20k/helpers/get.github.stars";
import { blogService } from "@github20k/services/blog/blog.service";

export default function Index({ stargazers_count, blog }) {
  return <BlogComponent stargazers_count={stargazers_count} blog={blog} />;
}

export async function getStaticProps(context) {
  return {
    props: {
      ...(await getGithubStars()),
      blog: await blogService.getPostList(),
    }, // will be passed to the page component as props
  };
}
