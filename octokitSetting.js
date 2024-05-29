require('dotenv').config();

const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});

// console.log(process.env.GITHUB_TOKEN);
// Never expose your token to the public.
// This is just for testing purposes.


module.exports = octokit;