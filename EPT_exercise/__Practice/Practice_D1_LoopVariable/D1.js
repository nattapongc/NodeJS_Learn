const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let sum = 0;
rl.on("line",(x) => {
    let t = x;
    for(let i = 0;i <= x;i++) {
        sum += i;
    }
    console.log(sum)
})