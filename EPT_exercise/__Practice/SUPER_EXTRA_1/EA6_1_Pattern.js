for(let i = 1;i <= 5;i++) {
    process.stdout.write("-".repeat(5-i));
    process.stdout.write("x".repeat(2*i - 1));
    console.log();
}