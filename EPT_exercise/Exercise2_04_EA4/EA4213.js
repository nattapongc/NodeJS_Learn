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
		b = parseFloat(input);
		count++;
	} else {
		c = parseFloat(input);
		
		if(a == 1) {
			console.log(b + c);
		} else if(a == 2){
			console.log(b*c);
		} else if(a == 3){
			console.log(b/c);
		} else {
			console.log("please select only 1-3");
		}

		rl.close();
	}
	
});
