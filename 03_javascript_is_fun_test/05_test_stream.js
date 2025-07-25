const http = require('http');
const url = require('url');
const readline = require('readline');

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req,res) => {
    let x = new url.URL(req.url,`http://${hostname}:${port}`);
    if(x.pathname == "/") {
        res.setHeader("Content-Type","text/html");
        res.statusCode = 200;
        res.end(`
            <form method = 'post action = '/xxx' enctype = "multipart/form-data">
                <input type = 'file' name = 'title'/>
                <input type = 'submit' name = 'submit'/>
            </form>
        `);
    } else if(x.pathname == "/xxx") {
        const rl = readline.createInterface({
            input: req,
            output: process.stdout
        });
        
        let dataInHandler = function(x) {
            console.log(x);
        };
        
        console.log("How old are you?");
        rl.on("line", dataInHandler);
        rl.on("end", () => {
            res.end("Send File Complete");
        })
    }
});

server.listen(port,hostname, () => {
    console.log(`Server is running ... in http://${hostname}:${port}`);
});