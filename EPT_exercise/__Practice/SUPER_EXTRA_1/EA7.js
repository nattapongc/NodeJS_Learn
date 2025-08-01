const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



let count = 0;
let ap, aw ,bp, bw;

rl.on("line", (input) => {
    if(count == 0) {
        aw = parseFloat(input);
    } else if(count == 1) {
        ap = parseFloat(input);
    } else if(count == 2) {
        bw = parseFloat(input);
    } else {
        bp = parseFloat(input);

        let am = ap/aw;
        let bm = bp/bw;

        if(am < bm) {
            console.log("A is cheaper than B");
        } else if(bm < am) {
            console.log("B is cheaper than A");
        } else {
            console.log("Equal price")
        }
        rl.close();
    }
    count++;
    
});
