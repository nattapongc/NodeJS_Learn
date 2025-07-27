const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let a,b,c;
rl.on("line",(x) => {
    if(count == 0){
        a = parseFloat(x);
    } else if(count == 1) {
        b = parseFloat(x);
    } else if(count == 2) {        
        c = parseFloat(x);
        let sum = a + b + c;
        console.log(sum);
        console.log(sum/3);
        rl.close();
    }
    count++;
})
