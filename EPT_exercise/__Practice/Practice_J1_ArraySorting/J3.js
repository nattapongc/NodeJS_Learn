const readline = require(`readline`);
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let x = [];

rl.on("line",(num) => {
    x.push(parseInt(num));
    if(x.length == 10) {
        x.sort((a,b) => a-b);
        
        console.log((x[4] + x[5]) / 2);

        rl.close();
    }
});