const fs = require("fs");

function PersonToString(p) {
    return p.name + "\n" + p.surname + "\n" + p.phone + "\r\n";
}

fs.readFile('message.txt',(err,data) => {
    if(err) throw err;
    // console.log(data.toString());
    let dataString = data.toString();
    let pp = dataString.split("\n");
    console.log(typeof(pp));
    console.log(pp[0]);
    console.log(pp[1]);
    console.log(pp[2]);

})