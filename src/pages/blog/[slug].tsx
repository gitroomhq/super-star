import { getGithubStars } from "@github20k/helpers/get.github.stars";
import { BlogPostComponent } from "@github20k/components/blog/blog.post.component";
import { blogService } from "@github20k/services/blog/blog.service";

export default function Index({ stargazers_count, blog }) {
  return <BlogPostComponent stargazers_count={stargazers_count} blog={blog} />;
}

export async function getStaticPaths() {
  const load = await blogService.getPostList();
  return {
    paths: load.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  return {
    props: {
      ...(await getGithubStars()),
      blog: await blogService.getPost(slug),
    }, // will be passed to the page component as props
  };
}
