const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let letter = [
	['xxxx','---x','xxxx','xxxx','x--x','xxxx','x---','xxxx','xxxx','xxxx'],
	['x--x','---x','---x','---x','x--x','x---','x---','---x','x--x','x--x'],
	['x--x','---x','xxxx','xxxx','xxxx','xxxx','xxxx','---x','xxxx','xxxx'],
	['x--x','---x','x---','---x','---x','---x','x--x','---x','x--x','---x'],
	['xxxx','---x','xxxx','xxxx','---x','xxxx','xxxx','---x','xxxx','---x']
];


rl.on("line", (input) => {
	let num_split = input.split("");
	for(let i = 0;i < 5;i++) {
		for(let j = 0;j < num_split.length;j++) {
			
			if(j == num_split.length-1) {
				process.stdout.write(`${letter[i][num_split[j]]}\n`);
			} else {
				process.stdout.write(`${letter[i][num_split[j]]}\t`);
			}
		}
		
		
	}
	rl.close();	
});

