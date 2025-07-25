const { stdin } = require('process');
const readline = require('readline');

rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

let a,b,c;
count = 0;

rl.on("line", (x)=> {
	if(count == 0) {
		a = parseFloat(x);
	} else if(count == 1){
		b = parseFloat(x);

		c = a + b;
		console.log(c);
	}
	count += 1;
});