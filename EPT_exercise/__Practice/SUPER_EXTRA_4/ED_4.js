const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

function larger3(a,b,c) {
    let max;
    if(a >= b && a >= c) {
        max = a;
    } else if(b >= a && b >= c) {
        max = b;
    } else if(c >= a && c >= b) {
        max = c;
    }
    console.log(max);
}

let a,b,c;

rl.on('line',(input)=> {
    if(a == undefined) {
        a = parseInt(input);
    } else if(b == undefined) {
        b = parseInt(input);
    } else if(c == undefined) {
        c = parseInt(input);
        rl.close();
        larger3(a,b,c)
    }
})

