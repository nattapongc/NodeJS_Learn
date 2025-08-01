const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

function lessPow(a) {
    let pow = Math.log(a)/Math.log(2);
    console.log(Math.pow(2,parseInt(pow)));

}

let a;

rl.on('line',(input)=> {
    a = parseInt(input);
    lessPow(a);
    rl.close();
})

