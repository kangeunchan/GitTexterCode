const fetchRepositoryNames = require('./repositoryFetcher');
const checkRepository = require('./repositoryChecker');

// console.log(fetchRepositoryNames);
// check import modules from repositoryFetcher.js

async function main() {
    try {
        const repositoriesNames = await fetchRepositoryNames();
        console.log(checkRepository(repositoriesNames));
    } catch (err) {
        console.error('Error fetching repository names:', err);
    }
}

main();
