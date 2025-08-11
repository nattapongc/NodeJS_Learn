const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

count = 0;
let a, b, c;

rl.on("line", (input) => {
	if(count == 0) {
		a = parseInt(input);
		count++;
	} else if(count == 1) {
		b = parseInt(input);
		count++;
	} else {
		c = parseInt(input);
		
		if(c == a + b) {
			console.log("+")
		} else if(c == a - b) {
			console.log("-")
		} else if(c == a * b) {
			console.log("*")
		} else if(c == a / b) {
			console.log("/")
		}

		rl.close();
	}
	
});
