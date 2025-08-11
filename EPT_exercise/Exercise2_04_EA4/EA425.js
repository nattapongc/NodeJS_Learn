const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

count = 0;
let A, B, C, m;

rl.on("line", (input) => {
	if (count == 0) {
		A = parseInt(input);
		count++;
	} else if (count == 1) {
		B = parseInt(input);
		count++;
	} else if (count == 2) {
		C = parseInt(input);
		count++;
	} else if(count == 3){
		m = parseInt(input);

		if(m > 5) {
			console.log((A*m*2) + (B*m) + C);
		} else if(m == 5) {
			console.log((A*m*2) + (B*m) - C);
		} else {
			console.log((A*m*2) + (B*m));
		}





		rl.close();
	}
});
