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
		a = x + "";
	} else if(count == 1){
		b = x + "";

		process.stdout.write(a + b);
	}
	count += 1;
});