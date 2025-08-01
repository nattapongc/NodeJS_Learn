const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line",(x) => {
    let time = parseInt(x);

    let sec = time % 60
    let mn = parseInt(time % (60 * 60) / 60);
    let hr = parseInt(time % (24 * 60 * 60) / (60*60));
    let day = parseInt(time % (30* 24 * 60 * 60) / (24*60*60));
    let month = parseInt(time % (12* 30 * 24 * 60 * 60) / (30*24*60*60));
    let year = parseInt(time / (30*12*24*60*60));

    console.log(year);
    console.log(month);
    console.log(day);
    console.log(hr);
    console.log(mn);
    console.log(sec);
});