let max = 9;
let line = 18;

for(let i = 1;i <= 9;i++) {
	
	if(i < 5) {
		process.stdout.write("*".repeat(2*i-1))
		process.stdout.write("-".repeat(18-(4*i-2)));
		process.stdout.write("*".repeat(2*i-1))
	} else if(i == 5) {
		process.stdout.write("*".repeat(max*2))
	} else if(i > 5) {
		process.stdout.write("*".repeat((max-i)*2 + 1))
		process.stdout.write("-".repeat((i-5) * 4))
		process.stdout.write("*".repeat((max-i)*2 + 1))
	}
	



	console.log();
}