import axios from "axios";

export const getGithubStars = async () => {
  try {
    const {
      data: { stargazers_count },
    } = await axios.get(
      `https://api.github.com/repos/${process.env.GITHUB_REPO}`
    );
    return { stargazers_count };
  } catch (err) {
    return {
      stargazers_count: 0,
    };
  }
};
