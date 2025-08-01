const { parse } = require("path");
const readline = require(`readline`);
const { blob } = require("stream/consumers");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let inputNums = [];
let is_999 = false;
let count = 0;
let a,b;

rl.on("line", (input) => {
	if(is_999) {
        if(a == undefined) {
            a = parseInt(input)
        } else if(b == undefined) {
            b = parseInt(input);
            rl.close();
            // console.log(inputNums.join(","));
            // console.log(a,b);

            let maxExp = inputNums[0];
            inputNums.shift();
            // console.log(inputNums)

            let upper = 0;
            let lower = 0;

            for(let i = 0;i < inputNums.length;i++) {
                upper += (inputNums[i]/(maxExp+1)) *  Math.pow(b,maxExp+1);
                lower += (inputNums[i]/(maxExp+1)) *  Math.pow(a,maxExp+1);
                maxExp--;
            }

            console.log(upper-lower);

        }
    } else {       
        if(input != -999) {
            inputNums.push(parseInt(input));
        } else if(input == -999) {
            is_999 = true;
        }
    }
    
});


