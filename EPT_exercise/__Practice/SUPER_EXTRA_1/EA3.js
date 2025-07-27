const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let T,l;

let count = 0;
rl.on(`line`,(x) => {
    if(count == 0) {
        T = parseFloat(x);
    } else if(count == 1){
        l = parseFloat(x);
        
        console.log(Math.pow(2*Math.PI/T,2)*l);



        rl.close();
    }
    
    
    count++;
});