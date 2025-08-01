const { parse } = require("path");
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let x = [];
// let v;

rl.on("line", (input) => {
    x.push(parseInt(input));
    if(x.length == 10) {
        // v = parseInt(input);
        x.sort((a,b) => b - a);
        console.log(`[${x.join(", ")}]`)
    }
    
});
EPT_exercise/__Practice/SUPER_EXTRA_3/EC_6.js