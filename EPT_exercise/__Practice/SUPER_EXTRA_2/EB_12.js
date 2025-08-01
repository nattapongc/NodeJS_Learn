const { parse } = require("path");
const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let a,b,c;
let count = 0;

rl.on("line",(n)=>{
	if(count == 0) {
		a = parseInt(n);
	} else if(count == 1){
		b = parseInt(n);
	} else if(count == 2){
		c = parseInt(n);
		
		let leftSide = b-a;
		let rightSide = c-b;
		if(leftSide > rightSide) {
			console.log(leftSide-1);
			rl.close();
		} else {
			console.log(rightSide-1);
			rl.close();
		}
	}
	count++;
});