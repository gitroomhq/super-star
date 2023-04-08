import HomeComponent from "@github20k/components/home/home.component";
import { getGithubStars } from "@github20k/helpers/get.github.stars";

export default function Home({ stargazers_count }) {
  return <HomeComponent stargazers_count={stargazers_count} />;
}

export async function getStaticProps(context) {
  return {
    props: {
      ...(await getGithubStars()),
    }, // will be passed to the page component as props
  };
}
