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

    let sql = `DELETE FROM \`products\` WHERE id = ?`;

    let data = [1]

    conn.query(sql,data, (err,result,field) => {
            if(err) throw err;
            console.log("DELETE Complete")
            console.log(result);
            
        }
    );
    conn.end();
});