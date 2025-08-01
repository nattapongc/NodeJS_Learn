const fs = require("fs");

let p = {
    name : "nattapol",
    surname : "EPT",
    phone : "0853507540"
}

function PersonToString(p) {
    return p.name + "\n" + p.surname + "\n" + p.phone + "\r\n";
}

const data = new Uint8Array(Buffer.from(PersonToString(p)));
fs.appendFile('message.txt',data ,(err) => {
    if(err) throw err;
    console.log('The file has been saved');
})