require('dotenv').config();

const octokit = require('@octokit/rest');

octokit = new octokit({
    auth: process.env.GITHUB_TOKEN
});

module.exports = octokit;