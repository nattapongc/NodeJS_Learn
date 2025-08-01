const { parse } = require("path");
const readline = require(`readline`);
const { blob } = require("stream/consumers");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let B_Arr = [];
let S_Arr = [];
let result = [];
let n,m;
let isDataPrepared = false;
// let v;

rl.on("line", (input) => {
    if(n == undefined) {
        n = parseInt(input);
    }else if(n > 0 && B_Arr.length < n) {
        B_Arr.push(parseInt(input));
    } else {
        if(m == undefined) {
            m = parseInt(input);
        }else if(m > 0 && S_Arr.length < m) {
            S_Arr.push(parseInt(input));
        }
    }

    if(B_Arr.length == n && S_Arr.length == m){
        for(let i = 0;i < B_Arr.length - (S_Arr.length-1);i++) {
            let conv = 0;
            for(let j = 0;j < S_Arr.length;j++) {
                conv += B_Arr[i+j] * S_Arr[j];
            }
            result.push(parseInt(conv));
        }

        console.log(`[${result.join(", ")}]`)
        rl.close();
    }


});