const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let working_hour = [[], [], [], [], []];

rl.on("line", (input) => {
	if (working_hour[0].length < 7) {
		working_hour[0].push(parseInt(input));
	} else if (working_hour[1].length < 7) {
		working_hour[1].push(parseInt(input));
	} else if (working_hour[2].length < 7) {
		working_hour[2].push(parseInt(input));
	} else if (working_hour[3].length < 7) {
		working_hour[3].push(parseInt(input));
	} else if (working_hour[4].length < 7) {
		working_hour[4].push(parseInt(input));
		if (working_hour[4].length == 7) {
            for(let i = 0;i < working_hour.length;i++) {
                console.log(working_hour[i].reduce((a,b) => a + b));
            }
            rl.close();
		}
	}
});
