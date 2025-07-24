const express = require('express');
const path = require('path');
const url = require('url');

const queryString = require('querystring');

const app = express();

let file_options = {
    root: path.join(__dirname,'/'),
}


const baseURL = "http://localhost"
const port = 3000;

app.get('/', (req,res) => {
    
    res.sendFile("home.html",file_options);
});

app.get('/about', (req,res) => {
   
    res.sendFile("./about.html",file_options);
});

app.get('/bmi', (req,res) => {
   
    res.sendFile("./bmi.html",file_options);
});


app.get('/bmi_calculation', (req,res) => {
   
    res.setHeader("Content-Type","text/html");
    res.writeHead(200);
    let xCurrentURL = new url.URL(req.url, baseURL + ":" + port)
    console.log(xCurrentURL.searchParams.get("submit"));

    if(xCurrentURL.searchParams.get("submit") == null) {
        res.end("Please input your weight and height <br/>" + 
            "<a href = '/bmi'> BMI </a>"
        );
    } else {
        let w = xCurrentURL.searchParams.get("weight");
        let h = xCurrentURL.searchParams.get("height");
        let bmi = w/ Math.pow((h/100),2);
        res.write("<img src = '/static/Tik.jpg' alt='Tik' width='200px'/>")
        res.end("Your BMI is " + bmi);
    }
});

app.post("/bmi_calculation",(req,res) => {
    
    let data = "";
    req.on("data",chunk => {
        data += chunk;
    });
    req.on("end", () => {
        console.log(data);
        let input = queryString.parse(data);
        console.log("Weight Input : " + input.weight);
        console.log("Height Input : " + input.height);
        console.log(input.submit);
        let w = input.weight;
        let h = input.height;
        let bmi = w/ Math.pow((h/100),2);
        res.setHeader("Content-Type","text/html");
        res.write("<img src = '/static/Tik.jpg' alt='Tik' width='200px'/>")
        res.end("Your BMI is " + bmi);
    });
});

app.use("/static",express.static("public"));
app.listen(port, () => {
    console.log("Server is running...")
});