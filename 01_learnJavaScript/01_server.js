const http = require("http");


let listerner = function(req, res) {

    res.setHeader("name","Expert-Programming-Tutor")
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.writeHead(200);
    res.end("<h1>Hello World</h1>");
}

const server = http.createServer(listerner);
server.listen(8080);