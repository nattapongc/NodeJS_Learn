const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})




rl.on("line",(x) => {
    let input = x;
    let count = 0;
    for(let i = 1;i<= input;i++) {
        if(input % i == 0) {
             count++;
        }
    }
    console.log(count);
})