let l = [1,2,3,4,5,6,7,8,9,10];
let i = 0;

process.stdout.write("[")
for(i; i < l.length;i++) {
	if(i == l.length-1) {
		process.stdout.write(l[i] + "]")
	} else {
		process.stdout.write(l[i] + ", ")
	}
}