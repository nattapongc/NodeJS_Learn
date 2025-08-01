const { parse } = require("path");
const readline = require(`readline`);
const { blob } = require("stream/consumers");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let n;
let numArr = [];

rl.on("line", (input) => {
	if(n == undefined) {
        n = parseInt(input);
    } else {
        if(numArr.length < n) {
            numArr.push(parseInt(input));
            if(numArr.length == n) {
                // console.log(numArr);
                let result = [];
                for(let i = 0; i <= parseInt(numArr.length/2) - 1;i++) {
                    result.push(numArr[i] + numArr[numArr.length-i - 1])
                }

                if(n % 2 != 0) {
                    result.push(2 * numArr[parseInt(numArr.length/2)]);
                }
                console.log(result)
                rl.close()
            }
        }
    }
});


