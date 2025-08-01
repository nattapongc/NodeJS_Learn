const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = [];
let sum = 0;

rl.on("line",(x) => {
    if(n.length < 5) {
        n.push(parseInt(x));
        if(n.length == 5){
            for(let i = 0;i < n.length;i++) {
                sum += n[i] * (4-i);
            }
            console.log(sum/(n.reduce((a,b) => a + b)));
        }
    } 
});