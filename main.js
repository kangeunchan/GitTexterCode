const fetchRepositoryNames = require('./repositoryFetcher');
const checkRepository = require('./repositoryChecker');

// console.log(fetchRepositoryNames);
// check import modules from repositoryFetcher.js


async function main() {

    let RepositoryStatus;

    try {
        const repositoriesNames = await fetchRepositoryNames();
        console.log();
        RepositoryStatus = checkRepository(repositoriesNames);
        console.log(RepositoryStatus);
    } catch (err) {
        console.error('Error fetching repository names:', err);
    }
}

main();
