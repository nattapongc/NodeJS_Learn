const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let sum = 0;
rl.on("line",(x) => {
    let t = x;
    for(let i = 1;i <= t;i++) {
        sum += 1/Math.pow(i,2);
    }
    console.log(Math.sqrt(6*sum));
})