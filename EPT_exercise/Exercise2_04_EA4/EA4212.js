const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

count = 0;
let y = 20;
let x;

rl.on("line", (input) => {
	x = parseFloat(input);
	if(x > 3) {
		console.log(100);
	} else if(x >= 2.1) {
		console.log(70);
	} else if(x >= 1.1) {
		console.log(60);
 	} else {
		console.log(50);
	}
	rl.close();
	
});
