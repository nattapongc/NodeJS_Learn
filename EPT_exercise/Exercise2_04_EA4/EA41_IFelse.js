const readline = require(`readline`);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

count = 0;
let a, b, c;

rl.on("line", (input) => {
	if (count == 0) {
		a = input;
		count++;
	} else if (count == 1) {
		b = input;
		count++;
	} else if (count == 2) {
		c = input;
		count++;
		if (count == 3) {
			if (a > 13) {
				if (b != 6) {
					console.log("A");
				} else {
					if (c <= 7) {
						console.log("B");
					} else {
						console.log("C");
					}
				}
			} else {
				if (b <= 16) {
					console.log("D");
				} else {
					if (c > 6) {
						console.log("E");
					} else {
						console.log("F");
					}
				}
			}
		}
        rl.close();
	}
});
