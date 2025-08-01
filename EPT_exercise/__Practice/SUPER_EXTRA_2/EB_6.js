for(let i = 1;i <= 110;i++) {
	if(i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
		process.stdout.write(`${i}`);
	} 
	else {
		if(i % 3 == 0) {process.stdout.write("Coza")}
		if(i % 5 == 0) {process.stdout.write("Loza")}
		if(i % 7 == 0) {process.stdout.write("Woza")}
	}
	
	if(i% 11 == 0) {console.log()}
}