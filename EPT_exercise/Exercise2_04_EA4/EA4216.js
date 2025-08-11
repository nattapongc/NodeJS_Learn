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
		
		if(a != b && b != c && c != a) {
			 console.log("a != b != c");
		} else if( a == b && b == c && a == c) {
			console.log("a = b = c");
		} else if(a == b) {
			console.log("a = b");
		} else if(a == c) {
			console.log("a = c");
		} else if(b == c) {
			console.log("b = c");
		}

		rl.close();
	}
	
});
