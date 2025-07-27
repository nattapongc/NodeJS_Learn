const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let sum = 1;
rl.on("line",(x) => {
    let t = x;
    for(let i = 1;i <= t;i++) {
        sum = sum * i;
    }
    console.log(sum)
})