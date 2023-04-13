import HomeComponent from "@github20k/components/home/home.component";
import { getGithubStars } from "@github20k/helpers/get.github.stars";

export default function Home(props: { stargazers_count: number }) {
  return <HomeComponent stargazers_count={props.stargazers_count} />;
}

export async function getStaticProps() {
  return {
    props: {
      ...(await getGithubStars()),
    }, // will be passed to the page component as props
    revalidate: 3600
  };
}
