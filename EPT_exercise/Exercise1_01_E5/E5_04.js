const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line",(inch) => {
    console.log(inch/12);
    console.log(inch*2.54);
    console.log(inch/36);
    rl.close();
})
