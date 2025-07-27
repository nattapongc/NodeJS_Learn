const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let m1,m2,R,f;

let count = 0;
rl.on(`line`,(x) => {
    if(count == 0) {
        m1 = parseFloat(x);
    } else if(count == 1){
        m2 = parseFloat(x);
    } else if(count == 2){
        R = parseFloat(x);
    } else if(count ==3) {
        f = parseFloat(x);
        console.log((f*Math.pow(R,2))/(m1*m2));
        rl.close();
    }
    
    
    count++;
});