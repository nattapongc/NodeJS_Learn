let printx = function(x) {
    if(x == 0) {
        return;
    }
    process.stdout.write("x");
    printx(x-1);
}

printx(10);