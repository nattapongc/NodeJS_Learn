const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

count = 0;
let a, b, c, d, e, f;

rl.on("line", (input) => {
	if(count == 0) {
		a = parseInt(input);
		count++;
	} else if(count == 1) {
		b = parseInt(input);
		count++;
	} else if(count == 2) {
		c = parseInt(input);
		count++;
	} else if(count == 3) {
		d = parseInt(input);
		count++;
	} else if(count == 4) {
		e = parseInt(input);
		count++;
	} else if(count == 5) {
		f = parseInt(input);
		
		console.log((e*d - b*f) / (a*d - b*c))
		console.log((a*f - e*c) / (a*d - b*c))
		rl.close();
	}
	
	
});
