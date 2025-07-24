const express = require('express');
const app = express();
app.get('/', (req,res) => {
   
    res.setHeader('content-type',"text/html");
    res.writeHead(200);
    for(let i = 0;i < 100;i++) {
        
        res.write("hello<br/>\n");

    }
    res.end("");
});

app.get('/about', (req,res) => {
   
    res.setHeader('content-type',"text/html");
    res.writeHead(200);
    res.end("MAP");
});

app.listen(8080, () => {
    console.log("Server is running...")
});