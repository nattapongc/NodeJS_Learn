const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

function sum(a,b) {
    console.log(a+b);
}

let a,b;

rl.on('line',(input)=> {
    if(a == undefined) {
        a = parseInt(input);
    } else if( b == undefined) {
        b = parseInt(input);
        rl.close();
        sum(a,b)
    }
})

