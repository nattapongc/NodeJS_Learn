const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

count = 0;
let y = 20;
let x;

rl.on("line", (input) => {
	x = parseInt(input);
	if(x > 100)
		{
			y = 20;
			console.log(y);
		}else	
		{
			y = 0;
			console.log(y);
		}
		

	rl.close();
	
});
