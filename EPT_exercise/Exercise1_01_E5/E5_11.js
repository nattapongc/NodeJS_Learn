const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a1,b1,c1,a2,b2,c2;
let x,y;
let count = 0;

rl.on("line", (x) => {
    if(count == 0) {            
        a1 = parseFloat(x);
    } else if(count == 1) {
        b1 = parseFloat(x);
    }
    else if(count == 2) {
        c1 = parseFloat(x);
    }
    else if(count == 3) {
        a2 = parseFloat(x);
    }
    else if(count == 4) {
        b2 = parseFloat(x);
    }
    else if(count == 5) {
        c2 = parseFloat(x);
        x = (c1*b2 - c2*b1)/(a1*b2 - a2*b1);
        y = (c1 - a1*x) /b1;
        console.log(x);
        console.log(y);
        rl.close()
    }
    count += 1;
});
