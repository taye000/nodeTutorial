const fs = require('fs');
const path = require('path');

//create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('folder created successfully');
});

//create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
'Hello mandem', err => {if (err) throw err;
    console.log('file written successfully');
});

//append file; add to the file contents
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
' I love to code', err => { if (err)throw err;
    console.log('file appended successfully');
});

//read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//rename file
fs.rename(path.join(__dirname, '/test', 'hell.txt'),
path.join(__dirname, '/test', 'hello.txt'), (err) => {
    if (err) throw err;
    console.log("renamed successfully")
})