let printx = function(x) {
    if(x == 0) {
        return;
    }
    console.log("x".repeat(x));
    printx(x-1);
}

printx(10);