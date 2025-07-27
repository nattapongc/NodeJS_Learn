let count = 0;

for (let j = 2; true; j++) {
	if(count == 100) {
		break;
	}
	
	let isPrime = true;
	for (let i = 2; i < j; i++) {
		if (j % i == 0) {
			isPrime = false;
			break;
		}
	}

	if (isPrime) {
		console.log(j);
		count++;
	}
}
