let printDash = (num,line) => {    
    let start = 1;
    if(num == 0) {
        return;
    }
    process.stdout.write(`-`.repeat(num-start));
    
    // 
    if((11-num) % 2 == 0) {
        printNumForward(1,(11-num)*2 - 1);
    } else {
    
        printNumBackward((11-num)*2 - 1,1);
    }
    
    console.log();
    printDash(num-1);
};

let printNumForward = (start,end) => {
    if(start > end){
        return;
    }
    process.stdout.write(`${start}`)
    printNumForward(start + 1,end);
}

let printNumBackward = (start,end) => {
    if(start < end){
        return;
    }
    process.stdout.write(`${start}`)
    printNumBackward(start - 1,end);
}
printDash(10);