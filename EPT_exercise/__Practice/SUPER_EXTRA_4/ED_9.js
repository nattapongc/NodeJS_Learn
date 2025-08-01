const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

function firstLetter(a) {
    let x = parseInt(a);
    x = x + "";
    console.log(x[0]);
}

let a;

rl.on('line',(input)=> {
    a = input;
    firstLetter(a);
    rl.close();
})

