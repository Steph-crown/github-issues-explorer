import octokit from "./octokit";

const requests = {
  getIssues: async () => {
    const res = await octokit.request("GET /issues");

    console.log("res", res);
    return;
  },
};

export default requests;
