const { createServer } = require("node:http");

const hostname = 'localhost';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text');
    res.end('<h1>Hi everyone!</h1>');
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});
