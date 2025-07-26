let printNumBefore = (start,end) => {
    if(start == end) {
        process.stdout.write(`${end}`);
        return;
    }
    process.stdout.write(`${start}`);
    printNumBefore(start+1,end);
}

let printNumAfter = (start,end) => {
    
    if(start <= 0) {
        return;
    }
    if(start == end) {
        process.stdout.write(`${start}`);
        return;
    }
    process.stdout.write(`${start}`);
    printNumAfter(start-1,end);
}

let printPattern = function(x) {
    if(x == 0) {
        return;
    }
    process.stdout.write("-".repeat(x-1))
    printNumBefore(1,11-x);
    printNumAfter(10-x,1)
    console.log();
    printPattern(x-1);
}

printPattern(10);