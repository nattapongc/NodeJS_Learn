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

    let sql = `INSERT INTO \`products\` (name,price,stock) VALUES ?`;
    let vvvv = [
        ['อาหารแมว Royal Canin',500,20],
        ['ขนมแมวเลีย',50,200],
        ['บ้านแมว',5000,2]
    ]

    conn.query(sql,[vvvv], (err,result) => {
            if(err) throw err;
            console.log("Insert Complete")
            
        }
    )
    conn.end();
});