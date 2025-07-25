const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dataInHandler = function(x) {
    let f1 = x;
    console.log(f1);
    rl.close();
};

console.log("How old are you?");

rl.on("line",dataInHandler);