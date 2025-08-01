const { parse } = require("path");
const readline = require(`readline`);
const { blob } = require("stream/consumers");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let a = [];
let b = [];
let c = [];
// let v;

rl.on("line", (input) => {
    if(a.length < 10) {
        a.push(parseInt(input));
    } else if(b.length < 10) {
        b.push(parseInt(input));
        if(a.length == 10 && b.length == 10){
            c = a.concat(b);
            console.log(`[${c.join(", ")}]`);
            rl.close();
        }
    }

    
});