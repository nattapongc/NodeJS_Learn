let l = [1,2,3,4,5,6,7,8,9,10];
let i = 0;

process.stdout.write("[")
for(i; i < l.length;i++) {
	process.stdout.write("\t" + l[i])
	if(i == l.length - 1) {
		process.stdout.write("]")
	}
}