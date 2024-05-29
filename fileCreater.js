require('dotenv').config();
const fs = require('fs');

function createFile() {
    const date = new Date();
    console.log(date);
    const directory = './fakecommit/';
    const filename = 'text.txt';
    const content = 'This Is Fake Commit Message \n' + 'Time : ' + date;

    fs.writeFile(directory + filename, content, (err) => {
        if (err) throw err;
        console.log('file : ' + filename + '\n' + 'content : ' + content);
        console.log('File created successfully');
    });
}

module.exports = createFile;

// createFile();
// this is for testing purposes