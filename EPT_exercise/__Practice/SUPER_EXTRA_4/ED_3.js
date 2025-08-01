const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

function larger(a,b) {
    
    if(a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

let a,b;

rl.on('line',(input)=> {
    if(a == undefined) {
        a = parseInt(input);
    } else if(b == undefined) {
        b = parseInt(input);
        rl.close();
        larger(a,b)
    }
})

