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

    let sql = `SELECT name,stock,price FROM  \`products\``;

    conn.query(sql, (err,result,field) => {
            if(err) throw err;
            console.log("Select Complete")
            console.log(result);
        }
    );
    conn.end();
});