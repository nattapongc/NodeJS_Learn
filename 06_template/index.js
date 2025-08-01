const express = require("express");
const fs = require("fs");
const app = express();

function showAllProducts (database_result) {
    let output = [];
    output.push("<table border = '1' style = 'border-collapse:collapse;'>");
    output.push("<tr>");
    output.push(`<th>id</th>`);
    output.push(`<th>name</th>`);
    output.push(`<th>stock</th>`);
    output.push(`<th>price</th>`);
    output.push("</tr>");
    for(let i = 0;i < database_result.length; i++) {
        output.push("<tr>");
        output.push(`<td>${database_result[i].id}</td>`);
        output.push(`<td>${database_result[i].name}</td>`);
        output.push(`<td>${database_result[i].stock}</td>`);
        output.push(`<td>${database_result[i].price}</td>`);
        output.push("</tr>");
    }

    return output.join("");
}


app.get("/", (req, res) => {
	const mysql = require("mysql");

	let conn = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "shop",
	});

	conn.connect((err) => {
		if (err) throw err;
		console.log("Connect Success!");

		let sql = `SELECT id,name,stock,price FROM  \`products\` ORDER BY id;`;

		conn.query(sql, (err, result, field) => {
			if (err) throw err;
			console.log("Select Complete");
			// console.log(result);

            res.status = 200;
            fs.readFile("./index.html",(err,data)=>{
                if(err) throw err;

                let frontEnd = data.toString();
                let table = showAllProducts(result);
                // console.log(table)
                frontEnd = frontEnd.replace(/\{\{products\}\}/g,table);
                // console.log(frontEnd);
                res.write(frontEnd);
                res.end("");
            });
            
		});

		conn.end();
	});
});

app.listen("8080", () => {
    console.log("server started");
});