const { parse } = require("path");
const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let x = [];

rl.on("line",(n)=>{
	if(parseInt(n) > 0) {
		x.push(parseInt(n));
	} else if(parseInt(n) < 0) {
		console.log("ERROR");
	} else if(n == 0 && x.length == 0) {
		console.log("NO AVERAGE")
		rl.close()
	} 
	else {
		let sum = x.reduce((a,b) => a+b,0);
		console.log(sum/x.length);
		rl.close()
	}
});