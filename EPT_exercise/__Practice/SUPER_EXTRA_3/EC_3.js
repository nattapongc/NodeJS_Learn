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
        let max = Math.max(...x);
        let index;
        x.forEach(value => {
            if(value == max) {
                index = x.indexOf(max);   
            }
        });

        console.log(max);
        console.log(index)
        rl.close();
    }
    
});
