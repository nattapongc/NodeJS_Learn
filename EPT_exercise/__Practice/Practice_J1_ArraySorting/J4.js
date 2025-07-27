const readline = require(`readline`);
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let x = [];

rl.on("line",(num) => {
    x.push(parseInt(num));
    if(x.length == 10) {
        let freq = 0;
        let maxf_num = -Infinity;
        for(let i = 0;i< 10;i++) {
            let count = 0;
            let tg_num = 0;
            for(let j = 0;j < 10;j++) {
                if(x[j] == x[i]) {
                    count++;
                }
            }
            if(count > freq) {
                freq = count;
                maxf_num = x[i];
            }
        }
        console.log(maxf_num);
        console.log(freq);
        rl.close();
    }
});