const { parse } = require("path");
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let x = [];
let count = 0;
let v,i;

rl.on("line", (input) => {
    if(x.length < 10) {
        x.push(parseInt(input));
    } else if(count == 0) {
        v = parseInt(input);
        count++;
    } else if(count == 1) {
        i = parseInt(input);

        x.splice(i,0,parseInt(v));
        x.pop();
        console.log(`[${x.join(', ')}]`)
        rl.close();
    }
    
});
