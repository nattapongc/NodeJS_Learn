const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

count = 0;
let a, b, c;

rl.on("line", (input) => {
	if (count == 0) {
		a = parseInt(input);
		count++;
	} else if (count == 1) {
		b = parseInt(input);
		count++;
	} else if (count == 2) {
		c = parseInt(input);

		if(c == 1) {
			console.log(a+b);
		} else if(c == 2) {
			console.log(a-b);
		} else if(c == 3) {
			console.log(a*b);
		} else if(c == 4) {
			console.log(a/b);
		}

		rl.close();
	}
});
