const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line",(r) => {
    
    console.log(Math.PI * Math.pow(r,2));    
    
    rl.close();
})
