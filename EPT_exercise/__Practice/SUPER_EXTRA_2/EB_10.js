let sum = 0;

let isEven = false;
for (let i = 1; i <= 50000; i++) {
	if(i % 2 == 0) {
		sum -= 1/(2*i - 1);
	} else {
		sum += 1/(2*i - 1);
	}
}
console.log(4*sum);
