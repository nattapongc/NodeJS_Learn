const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dataInHandler = function(x) {
    let f1 = parseFloat(x);
    let f0 = 2e10;
    let v = 10.7585e8 * (f1-f0)/(f1+f0);

    console.log(v);
    rl.close();
};

rl.on("line",dataInHandler);