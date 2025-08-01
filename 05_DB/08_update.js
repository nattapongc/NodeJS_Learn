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

    let sql = `UPDATE \`products\` SET name = ? WHERE id = ?`;

    let data = ["อาหารหมา" , 1]

    conn.query(sql,data, (err,result,field) => {
            if(err) throw err;
            console.log("Select Complete")
            console.log(result);
        }
    );
    conn.end();
});