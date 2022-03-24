const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, Content)=> {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html'});
    //         res.end(Content);
    //     }
    // )


//build file path
let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' :req.url
);
// console.log(filePath);
// res.end();
//extension of file
let extname = path.extname(filePath);

//initial content type
let contentType ='text/html';

//check ext name and set content type
switch (extname) {
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.css':
        contentType = 'text/css';
        break;
    case '.json':
        contentType = 'application/json';
        break;
    case '.png':
        contentType = 'image/png';
        break;             
  }

//read file
  fs.readFile(filePath, (err, content) => {
      if (err) {
         if(err.code == 'ENOENT') {
            //page not found
             fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content)=> {
                 res.writeHead(200, { 'Content-Type': 'text/html' });
                 res.end(content, 'utf-8');
             })
         } else {
            //server error
             res.writeHead(500);
             res.end(`server error: ${err.code}`);
         }
    } else {
        //success
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
    }
  });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running at ${PORT}`));