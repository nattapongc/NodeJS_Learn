const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let A,l;
let P = 1.59e-8;

let count = 0;
rl.on(`line`,(x) => {
    if(count == 0) {
        A = parseFloat(x);
    } else if(count == 1){
        l = parseFloat(x);
        
        console.log(P*l/A);



        rl.close();
    }
    
    
    count++;
});