const { parse } = require("path");
const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let x = [];
let l = 0;

rl.on("line", (input) => {
	if (l == 0) {
		l = parseInt(input);
	} else {
		x.push(parseFloat(input));
		if (x.length == l) {
			let sum = x.reduce((a, b) => a + b, 0);
			console.log(sum / x.length);
			console.log(parseFloat(Math.min(...x)));
			console.log(parseFloat(Math.max(...x)));
			rl.close();
		}
	}
});
