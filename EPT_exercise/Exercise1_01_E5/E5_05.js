const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line",(celc) => {
    console.log((celc*9/5)+32)
    rl.close();
})
