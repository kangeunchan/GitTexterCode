
/**
 * This module is responsible for fetching the list of repositories
 */


const octokit = require('./gitSetting');
const repos = octokit.repos.listForAuthenticatedUser();

let repositoriesNames = []; // Array to store the names of the repositories

repos.then(({ data }) => {
    data.forEach(repo => {
        repoNames.push(repo.name);
        // console.log(repoNames); 
    });
    console.log(repoNames);
}).catch(err => {
    console.log(err);
});

export default repositoriesNames;