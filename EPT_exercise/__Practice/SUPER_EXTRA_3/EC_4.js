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
            let index = x.indexOf(v);
            x.splice(index,1);
            x.push(0);
            console.log(`[${x.join(', ')}]`)
        } else {
            console.log(`[${x.join(', ')}]`)
        }
        rl.close();
    }
    
});
