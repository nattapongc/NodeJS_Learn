const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line",(x) => {
    let n =  x;
    let n_fac = Math.sqrt(2*Math.PI*n)*Math.pow((n/Math.E),n);

    console.log(n_fac);
});