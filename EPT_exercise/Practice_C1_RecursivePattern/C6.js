let printx = function(x) {
    if(x == 0) {
        return;
    }
    process.stdout.write("-".repeat(x-1))
    process.stdout.write("x".repeat(2*(11-x) - 1));
    console.log();
    printx(x-1);
}

printx(10);