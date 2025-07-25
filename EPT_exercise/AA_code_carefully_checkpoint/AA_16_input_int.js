const readline = require("readline");

const rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

let a,b,c;

count = 0;
rl.on("line", (x)=> {
	if(count == 0) {
		a = parseInt(x);
	} else if(count == 1){
		b = parseInt(x);

		c = a + b;
		console.log(c);
	}
	count += 1;
});