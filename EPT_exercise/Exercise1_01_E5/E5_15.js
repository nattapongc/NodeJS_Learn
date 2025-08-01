const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let w;
let h;

let count = 0;

rl.on("line",(x) => {
    if(count == 0) {
        w = parseInt(x); 
    } else if(count == 1){
        h = parseInt(x);

        console.log(Math.sqrt((w*h)/3600));
        console.log((71.84 * Math.pow(w,0.425) * Math.pow(h,0.725))/10000)

        let a = 0.7285-(0.0188 *(3 + Math.log10(w)));
        console.log(3.207e-4 * Math.pow(h,0.3) * Math.pow(1000*w,a))
        rl.close();
    }
    count++;
});