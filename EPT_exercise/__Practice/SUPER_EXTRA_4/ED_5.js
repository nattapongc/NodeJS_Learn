const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

function abs(a) {
    if(a < 0) {
        console.log(a*-1);
    } else {
        console.log(a);
    }
}

let a;

rl.on('line',(input)=> {
    a = parseInt(input);
    abs(a);
})

