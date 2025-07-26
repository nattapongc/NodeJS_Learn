const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let count = 0;
let a,b,max;
rl.on('line',(x) => {
    if(count == 0){
        a = x;
    } else if(count == 1){
        b = x;

        if(a > b) {
            max = a; 
        } else {
            max = b;
        }

        let i = max;
        while(true) {
            if(i % a == 0 && i % b == 0) {
                console.log(i);
                break;
            }
            i++;
        }
    }
    count += 1;
});
