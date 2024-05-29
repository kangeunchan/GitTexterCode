const octokit = require('./octokitSetting');

async function fetchRepositoryNames() {
    try {
        const { data } = await octokit.repos.listForAuthenticatedUser();
        return data.map(repo => repo.name);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = fetchRepositoryNames;

fetchRepositoryNames().then(console.log).catch(console.error);