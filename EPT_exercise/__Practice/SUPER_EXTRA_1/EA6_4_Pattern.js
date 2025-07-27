const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    let n = parseInt(input);
    let middle = parseInt((n/2) + 1);

    for(let i = 1;i <= n;i++) {
        for(let j = 1; j <= n;j++) {
            if(j == middle-i + 1 || j == middle + i -1) {
                process.stdout.write("x")
            } else if(i == j + middle -1 || i == n + middle - j) {
                process.stdout.write("x")
            } else {
                process.stdout.write("-")
            }
        }
    console.log("")
    }
    rl.close()
});
