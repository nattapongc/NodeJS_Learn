const express = require("express");
const EPTMySQL = require("./DatabaseModule");
const eptDatabase = new EPTMySQL.MySQLDatabase();
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
	const mysql = require("mysql");
    let sqlconnection;
	eptDatabase.openDatabaseConnection(eptDatabase.getConfig())
    .then((conn) => {
        sqlconnection = conn;
        console.log("Connect Success!");
        let result = eptDatabase.getAllData(conn);
        return result;
    }).then((result) => {
        res.status = 200;
        res.render("shop_template",{products : result});
    })
    .catch((e) => {
        console.log(e);
    })
    .finally(() => {
        sqlconnection.end();
    })
});

app.get("/insert", (req, res) => {
	const mysql = require("mysql");
	let conn = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "shop",
	});

	let name = req.query.name || "no_name";
	let price = req.query.price || 0;
	let stock = req.query.stock || 0;

	conn.connect((err) => {
		if (err) throw err;
		console.log("Connect Success!");
		let sql = `INSERT INTO \`products\` (name,price,stock)
                    VALUES (?,?,?);`;

		conn.query(sql, [name, price, stock], (err, result, field) => {
			if (err) throw err;
			console.log("INSERT Complete");
			// console.log(result);

			res.status = 200;
			sql = `SELECT id,name,stock,price FROM  \`products\` ORDER BY id;`;

			conn.query(sql, (err, result, field) => {
				if (err) throw err;
				console.log("Select Complete");
				// console.log(result);

				res.status = 200;
				res.render("shop_template", { products: result });

				conn.end();
			});
		});
	});
});

app.get("/updatestock/:id/:add", (req, res) => {
	const mysql = require("mysql");
	let conn = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "shop",
	});

	let id = req.params.id || 0;
	let addstock = req.params.add || 0;

	conn.connect((err) => {
		if (err) throw err;
		console.log("Connect Success!");
		let sql = "";
		if (addstock == 1) {
			sql = `UPDATE \`products\` SET stock = stock + 1 WHERE id = ?;`;
		} else if (addstock == -1) {
			sql = `UPDATE \`products\` SET stock = stock - 1 WHERE id = ?;`;
		}

		conn.query(sql, [id], (err, result, field) => {
			if (err) throw err;
			console.log("INSERT Complete");
			// console.log(result);

			res.status = 200;
			sql = `SELECT id,name,stock,price FROM  \`products\` ORDER BY id;`;

			conn.query(sql, (err, result, field) => {
				if (err) throw err;
				console.log("Select Complete");
				// console.log(result);

				res.status = 200;
				res.render("shop_template", { products: result });

				conn.end();
			});
		});
	});
});

app.get("/delete/:id", (req, res) => {
	const mysql = require("mysql");
	let conn = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "shop",
	});

	let id = req.params.id || 0;

	conn.connect((err) => {
		if (err) throw err;
		console.log("Connect Success!");
		let sql = `DELETE FROM \`products\` WHERE id = ?;`;

		conn.query(sql, [id], (err, result, field) => {
			if (err) throw err;
			console.log("INSERT Complete");
			// console.log(result);

			res.status = 200;
			sql = `SELECT id,name,stock,price FROM  \`products\` ORDER BY id;`;

			conn.query(sql, (err, result, field) => {
				if (err) throw err;
				console.log("Select Complete");
				// console.log(result);

				res.status = 200;
				res.render("shop_template", { products: result });

				conn.end();
			});
		});
	});
});

app.listen("8080", () => {
	console.log("server started");
});
