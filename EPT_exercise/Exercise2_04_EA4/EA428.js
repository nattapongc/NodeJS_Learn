const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});


rl.on("line", (input) => {
	
	if(input % 2 == 0) {
		console.log("EVEN NUMBER");
	} else {
		console.log("ODD NUMBER")
	}

	rl.close();
});
