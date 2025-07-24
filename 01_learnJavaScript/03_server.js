const http = require('http');
const fs = require('fs');
const url = require('url');

const baseURL = "http://localhost"
const port = 8080;
const httpCallbackfFunc = function (req,res) {
    
    let xCurrentURL = new url.URL(req.url,baseURL + ":" + port);
    console.log(xCurrentURL.toString());
    if(xCurrentURL.pathname == "/") {
        fs.readFile("./home.html",function (err,data) {
            if(err) throw err;
            res.setHeader("Content-Type","text/html")
            res.writeHead(200);
            res.write(data.toString());
            res.end("");
        });
    } else if(xCurrentURL.pathname == "/about") {
        fs.readFile("./about.html",function (err,data) {
            if(err) throw err;
            res.setHeader("Content-Type","text/html")
            res.writeHead(200);
            res.write(data.toString());
            res.end("");
        });
    } else if(xCurrentURL.pathname == "/bmi") {
        fs.readFile("./bmi.html",function (err,data) {
            if(err) throw err;
            res.setHeader("Content-Type","text/html")
            res.writeHead(200);
            res.write(data.toString());
            res.end("");
        });
    } else if(xCurrentURL.pathname == "/bmi_calculation"){
        res.setHeader("Content-Type","text/html");
        res.writeHead(200);
        if(xCurrentURL.searchParams.get("weight") == "" || xCurrentURL.searchParams.get("height") == "") {
            res.end("Please input your weight and height <br/>" + 
                "<a href = '/bmi'> BMI </a>"
            );
        } else {
            let w = xCurrentURL.searchParams.get("weight");
            let h = xCurrentURL.searchParams.get("height");
            let bmi = w/ Math.pow((h/100),2);
            res.write("<img src = '/public/Tik.jpg' alt='Tik'>")
            res.end("Your BMI is " + bmi);
        }

    } else if(xCurrentURL.pathname.indexOf("/public/") == 0) {
        let isFileExist = fs.existsSync("."+ xCurrentURL.pathname);
        if(isFileExist) {
            fs.readFile("."+xCurrentURL.pathname,function(err,data) {
                if(err) throw err;
                res.setHeader("Content-Type","image/jpeg");
                res.writeHead(200);
                res.write(data);
                res.end("");
            });
        }
    } else {
        res.writeHead(404);
        res.end("");

    }

    
}

let server = http.createServer(httpCallbackfFunc);
server.listen(port);
