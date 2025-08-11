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
		
		let max;
		let x,y;

		if(a >= b && a >= c) {
			max = a;
			x = b;
			y = c;
		} else if(b >= a && b >= c) {
			max = b;
			x = a;
			y = c;
		} else if(c >= a && c >= b) {
			max = c;
			x = a;
			y = b;
		}

		if(x + y <= max) {
			console.log("not triangle")
		} else {
			console.log("triangle")
		}

		rl.close();
	}
	
});
