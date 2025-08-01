const { parse } = require("path");
const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line",(n)=>{
	let sum = 1;
	for(let i = 1;i <= n;i++) {
		sum = sum * i;
	}
	console.log(sum);
	rl.close();
});