import { getGithubStars } from "@github20k/helpers/get.github.stars";
import { BlogPostComponent } from "@github20k/components/blog/blog.post.component";
import { blogService } from "@github20k/services/blog/blog.service";
import {Details} from "@github20k/services/blog/blog.interface";

export default function Index(props: { stargazers_count: number, blog: Details }) {
  return <BlogPostComponent stargazers_count={props.stargazers_count} blog={props.blog} />;
}

export async function getStaticPaths() {
  const load = await blogService.getPostList();
  return {
    paths: load.map((p: Details) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps(props: { params: { slug: string } }) {
  return {
    props: {
      ...(await getGithubStars()),
      blog: await blogService.getPost(props.params.slug),
    }, // will be passed to the page component as props
  };
}
