const fs = require('fs')

fs.readFile("./data.txt",{encoding : 'utf-8'},(err,data) => {
    if(err) throw err;
    console.log(data.toString());
});

