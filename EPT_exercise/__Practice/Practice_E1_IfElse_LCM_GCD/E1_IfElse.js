const readline = require(`readline`);

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let count = 0;
let a,b;
rl.on("line",(x) => {
    if(count == 0) {
        a = x;
    } else if(count == 1) {
        b = x;
        if(a > b){
            console.log(a);
        } else {
            console.log(b);
        }
    }
    count += 1;
});