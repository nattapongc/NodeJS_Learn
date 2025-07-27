let n = 9;

for(let i = 1;i <= n;i++) {
    for(let j = 1; j <= n;j++) {
        if(j == i || j == n + 1-i) {
            process.stdout.write("x");
        } else {
            process.stdout.write("-");
        }
    }
    console.log("")
}