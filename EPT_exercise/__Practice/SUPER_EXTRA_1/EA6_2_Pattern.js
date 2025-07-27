for(let i = 1;i <= 5;i++) {
    process.stdout.write("-".repeat(i-1));
    process.stdout.write("x".repeat((5-i)*2 + 1));
    console.log();
}