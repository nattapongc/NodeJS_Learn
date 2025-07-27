let i = 1;

for(i; i <= 1000;i++){
    if(i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
        //do nothing
    } else if((i % 3 == 0 && i % 5 == 0) || (i % 3 == 0 && i % 7 == 0) || (i % 7 == 0 && i % 5 == 0)) {
        console.log(i);
    }
}