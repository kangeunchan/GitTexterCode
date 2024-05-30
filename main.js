const fetchRepositoryNames = require('./repositoryFetcher');
const checkRepository = require('./repositoryChecker');
const createRepository = require('./gitRepositoryCreater');

// console.log(fetchRepositoryNames);
// check import modules from repositoryFetcher.js


async function main() {

    let RepositoryStatus;

    try {
        const repositoriesNames = await fetchRepositoryNames();
        console.log();
        RepositoryStatus = checkRepository(repositoriesNames);
        console.log(RepositoryStatus);
        if (RepositoryStatus) {
            const repoName = process.env.REPO_NAME;
            const Disclosure = process.env.DISCLOSURE;
            const data = await createRepository(repoName, Disclosure);
            console.log('Repository created:', data.html_url);
        }
    } catch (err) {
        console.error('Error fetching repository names:', err);
    }
}

main();
