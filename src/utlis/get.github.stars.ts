import axios from "axios";

// since there is a limit over GitHub stars, let's cache the results
let stargazers_count = 0;
export const getGithubStars = async () => {
  if (stargazers_count) {
    return { stargazers_count };
  }

  try {
    const { data } = await axios.get(
      `https://api.github.com/repos/${process.env.GITHUB_REPO}`
    );

    stargazers_count = data.stargazers_count;
    return { stargazers_count };
  } catch (err) {
    return {
      stargazers_count: 0,
    };
  }
};
