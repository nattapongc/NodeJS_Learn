const { parse } = require("path");
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let x = [];
let v;

rl.on("line", (input) => {
    if(x.length < 10) {
        x.push(parseInt(input));
    } else {
        v = parseInt(input);
        let isInArray = false;
        x.forEach(value => {
            if(value == v) {
                isInArray = true;   
            }
        });

        if(isInArray) {
             console.log("V is in array");
        } else {
            console.log("is not in array");
        }
        rl.close();
    }
    
});
