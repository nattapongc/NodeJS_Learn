const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})




rl.on("line",(x) => {
    let input = x;
    let count = 0;

    
    for(let i = 2;i< input;i++) {
        
        if(input % i == 0) {
            console.log("is not a prime number")
            return;
        }
    }

    if(input == 1) {
        console.log("is not a prime number")
        return;
    }
    console.log("is a prime number");
})