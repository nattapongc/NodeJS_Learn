const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

count = 0;
let a, b, c;

rl.on("line", (input) => {
	if(input > 30) {
		console.log("TOO OLD")
	}
	
	
	rl.close();
	
});
