console.log(
	`*|\t1\t2\t3\t4\t5\t6\t7\t8\t9`
)
console.log("-".repeat(77));

for(let i = 1; i <= 9;i++) {
	process.stdout.write(`${i}` + `|`);
	for(let j = 1; j <= 9; j++) {
		process.stdout.write(`\t${i*j}`);
	}
	console.log();
}