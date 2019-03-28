const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
//  helper fucnction == "middle-ware" or "request handlers"
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('hello there');
});

server.listen(port, hostname, () => {
    console.log(`server is running at ${hostname}, ${port}`);
});