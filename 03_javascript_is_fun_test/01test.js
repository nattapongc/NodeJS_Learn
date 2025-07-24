const http = require("http");
const server = http.createServer((req,res) => {
    res.statusCode = (200);
    res.end("Hello")
});

const hostname = "127.0.0.1";
const port = 8080;

server.listen(port, hostname, () => {
    console.log(`Server is running... on http://${hostname}:${port}/`);
});