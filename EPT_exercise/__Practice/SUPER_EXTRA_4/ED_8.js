const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

function isPrime(a) {
    if((a > 2 && a % 2 == 0) || a == 1) {
        console.log(1);
        return;
    } 

    let isPrime_ = false;
    let x = parseInt(Math.sqrt(a))
    for(let i = 2;i <= x;i++) {
        if(a % i == 0) {
            isPrime_ = true;
        }
    }

    if(!isPrime_) {
        console.log(0)
    } else {
        console.log(1)
    }
    
}

let a;

rl.on('line',(input)=> {
    a = parseInt(input);
    isPrime(a);
    rl.close();
})

