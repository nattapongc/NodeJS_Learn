let x = [1, 2, 1, 3, 8, 5, 4, 6, 8, 4, 2, 5, 6, 1, 2, 1, 0, 0, 1, 0];
let y = [-1, 0, 1];
let result = [];


for(let i = 0;i < x.length - 2;i++) {
    let sum = 0;
    sum += x[i] * y[0];
    sum += x[i+1] * y[1];
    sum += x[i+2] * y[2];
    result.push(parseInt(sum));
}

console.log(`[${result.join(", ")}]`)