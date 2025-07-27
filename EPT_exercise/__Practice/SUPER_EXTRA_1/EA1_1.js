const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let m1,m2,R;
let G = 6.67e-11;

let count = 0;
rl.on(`line`,(x) => {
    if(count == 0) {
        m1 = parseFloat(x);
    } else if(count == 1){
        m2 = parseFloat(x);
    } else if(count == 2){
        R = parseFloat(x);

        console.log(G*(m1*m2)/Math.pow(R,2));
        rl.close();
    }
    
    
    count++;
});