const octokit = require('./octokitSetting');

async function createRepository(repoName, Disclosure) {
  const {data} = await octokit.request("POST /user/repos", {
    name: repoName,
    private: Disclosure,
  });
  return data;
}

module.exports = createRepository;