let printx = function(x) {
    if(x == 0) {
        return;
    }
    console.log("xxxxxxxxxx");
    printx(x-1);
}

printx(10);