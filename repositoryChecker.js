/**
 * @param {*} repositoriesNames 
 * This function checks if the repository name in the .env file matches the name of the repository you want to use.
 * If the function returns true you can use that repository name. Conversely, if the result is false, you cannot use that repository name.
 */
function checkRepository(repositoriesNames) {
    for (const repo of repositoriesNames) {
        if (repo === process.env.REPO_NAME) {
            console.log('Change REPO_NAME in .env file');
            return false;
        }
    }
    console.log('Repository name is correct.');
    return true;
}

module.exports = checkRepository;
