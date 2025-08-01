const { parse } = require("path");
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let x = [];

rl.on("line", (input) => {
    x.push(parseFloat(input));
    if(x.length == 10) {
        let sum = x.reduce((a,b) => a+b,0);
        console.log(sum/x.length);
        console.log(parseFloat(Math.min(...x)));
        console.log(parseFloat(Math.max(...x)));
        rl.close();
    }
});