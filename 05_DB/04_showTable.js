const mysql = require('mysql');

let conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "shop",


});

conn.connect((err) => {
    if(err) throw err;
    console.log("Connect Success!");
    conn.query(
        `SHOW TABLES;`, 
        (err,result) => {
        if(err) throw err;
        console.log("SHOW TABLE")
        for(let row in result) {
            // Object.keys(result[row]).forEach((prop) => console.log(prop));
            console.log(result[row].Tables_in_shop);
        }
            
    })
    conn.end();
});