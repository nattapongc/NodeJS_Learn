const { parse } = require("path");
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line",(n)=>{
	for(let i = n;i > 0;i--) {
		console.log("*".repeat(i));
	}
	rl.close()
});