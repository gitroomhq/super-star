import { getGithubStars } from "@github20k/helpers/get.github.stars";
import { PrivacyPolicyComponent } from "@github20k/components/blog/privacy-policy.component";

export default function Success(props: { stargazers_count: number }) {
  const { stargazers_count } = props;
  return <PrivacyPolicyComponent stargazers_count={stargazers_count} />;
}

export async function getStaticProps() {
  return {
    props: {
      ...(await getGithubStars()),
    }, // will be passed to the page component as props
  };
}
