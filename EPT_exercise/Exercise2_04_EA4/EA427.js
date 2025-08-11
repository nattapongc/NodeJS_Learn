const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});


rl.on("line", (input) => {
	
	if(input >= 0) {
		console.log("POSITIVE INTEGER");
	} else {
		console.log("NOT POSITIVE INTEGER")
	}

	rl.close();
});
