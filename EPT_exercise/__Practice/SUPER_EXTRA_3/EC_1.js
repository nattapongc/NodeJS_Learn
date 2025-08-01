const { parse } = require("path");
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let x = [];

rl.on("line", (input) => {
    x.push(parseInt(input));
    if(x.length == 10) {
        let count = 0;
        x.forEach((value) => {
            if(value >= 10) {
                count += 1;
            }
        })
        console.log(count);
        rl.close();
    }
});
