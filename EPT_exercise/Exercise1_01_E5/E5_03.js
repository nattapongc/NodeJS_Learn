const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line",(area) => {
    
    console.log(Math.sqrt(area/Math.PI));    
    
    rl.close();
})
