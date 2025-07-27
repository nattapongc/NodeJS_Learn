for (let j = 2; j <= 100; j++) {
	let isPrime = true;
	for (let i = 2; i < j; i++) {
		if (j % i == 0) {
			isPrime = false;
			break;
		}
	}

	if (isPrime) {
		console.log(j);
	}
}
