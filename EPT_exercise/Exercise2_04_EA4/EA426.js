const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

count = 0;
let hr,mn;

rl.on("line", (input) => {
	if (count == 0) {
		hr = parseInt(input);
		count++;
	} else if (count == 1) {
		mn = parseInt(input);
		
		if(hr == 0) {
			console.log(0)
		} else if(mn > 0) {
			console.log(hr*30);
		} else {
			console.log((hr-1)*30);
		}



		rl.close();
	}
});
