require('dotenv').config();
const fs = require('fs');

function createFile() {
    const date = new Date();
    console.log(date);
    const directory = './' + process.env.FILE_PATH + '/';
    const filename = process.env.FILE_NAME + '.txt';
    const content = process.env.TEXT+ '\n' + 'Time : ' + date;

    fs.writeFile(directory + filename, content, (err) => {
        if (err) throw err;
        console.log('file : ' + filename + '\n' + 'content : ' + content);
        console.log('The file has been saved!');
    });
}

module.exports = createFile;

// createFile();
// this is for testing purposes