const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a, b, c;

let count = 0;
rl.on(`line`,(input) => {
    if(count == 0) {
        a = parseInt(input);
    } else if(count == 1){
        b = parseInt(input);
    } else if(count == 2) {
        c = parseInt(input);
    
        let max_side;
        let x,y;
        if(a > b && a > c) {
            max_side = a;
            x = b;
            y = c;
        } else if(b > a && b > c) {
            max_side = b;
            x = a;
            y = c;
        } else {
            max_side = c;
            x = a;
            y = b;
        }

        if(x + y <= max_side) {
            console.log("is not triangle")
            return;
        }

        let max_sideP2 = Math.pow(max_side,2);
        let xP2 = Math.pow(x,2);
        let yP2 = Math.pow(y,2);

        if(max_sideP2 == xP2 + yP2) {
            console.log("right triangle");
        } else if(max_sideP2 > xP2 + yP2) {
            console.log("obtuse triangle");
        } else if(max_sideP2 < xP2 + yP2) {
            console.log("acute-angled triangle");
        }

        if(a == b && b == c) {
            console.log("equilateral triangle");
        } else if (a != b && b != c) {
            console.log("scalene triangle");
        } else {
            console.log("isosceles triangle");
        }

        rl.close();
    }
    
    
    count++;
});