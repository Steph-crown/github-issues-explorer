import octokit from "./octokit";

const requests = {
  getIssues: async () => {
    const res = await octokit.request("GET /issues");

    return res.data;
  },
};

export default requests;
