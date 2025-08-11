const express = require("express");
var multer = require("multer");
const path = require("path");
var upload = multer({ dest: "uploads/" });
const crypto = require("crypto");
const cookiesSession = require("cookie-session");
const app = express();
let mysql = require("mysql");
const fs = require("fs");
const password_salt = "เรียนเขียนโปรแกรมที่ EPT สนุกจังเลย";

app.set("view engine", "ejs");
app.set("views", "views");
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/property", express.static(__dirname + "/property"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
	cookiesSession({
		name: "session",
		keys: ["key1, key2"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

function showMassage(msg) {
	return `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="/css/styles.css" />

                    <link
                        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                        rel="stylesheet"
                        id="bootstrap-css"
                    />

                    <link rel="stylesheet" href="/css/login.css" />
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                    <title>Register</title>
                </head>
                <body>
                    <h1>${msg}</h1>
                    <button class="btn btn-succcess" style="background-color:rgb(20,150,250);" onclick="window.history.back()">Back</button>
                </body>
            </html>
            `;
}

let configDB = () => {
	return mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "property",
	});
};

app.get("/", (req, res) => {
	res.render("property_view", { items: [] });
});

app.get("/search", (req, res) => {
	let conn = configDB();
	conn.connect();
	let keyword = "%" + req.query.keyword + "%" || "";
	let sql =
		"SELECT * FROM w701_test_properties WHERE real_estate_name LIKE ? OR LOCATION LIKE ?;";

	conn.query(sql, [keyword, keyword], (err, results, fields) => {
		if (err) throw err;
		res.render("property_view", { items: results });
	});
});

app.get("/property_detail/:id", (req, res) => {
	let conn = configDB();
	conn.connect();
	let id = req.params.id || 0;
	let sql = "SELECT * FROM w701_test_properties WHERE id = ?;";

	conn.query(sql, [id], (err, results, fields) => {
		if (err) throw err;
		res.render("property_detail", { item: results[0] });
	});
});

app.get("/login", (req, res) => {
	let password_wrong = req.query.password || "";
	if (password_wrong == "wrong") {
		password_wrong = true;
	} else {
		password_wrong = false;
	}

	res.render("login", { password_wrong: password_wrong });
});

app.post("/login", (req, res) => {
	let user = req.body.email || "";
	let password = req.body.password || "";

	let conn = configDB();
	conn.connect();

	const hash = crypto
		.createHash("sha256")
		.update(password + password_salt)
		.digest("base64");

	let sqlCheck = `SELECT * FROM \`users\` WHERE email = ? AND password = ?`;
	conn.query(sqlCheck, [user, hash], (err, results, fields) => {
		if (err) throw err;
		if (results.length > 0) {
			// res.status(200).send(`OK`);
			req.session.username = results[0].name;
			req.session.userrole = results[0].role;
			req.session.email = results[0].email;
			res.redirect("/dashboard");
		} else {
			console.log(`Username : ${user} , Password : ${hash}`);
			res.redirect("/login?password=wrong");
		}
		conn.end();
	});
});

app.get("/logout", (req, res) => {
	req.session = null;
	res.redirect("/");
});

app.get("/register", (req, res) => {
	res.render("register");
});

app.post("/register", (req, res) => {
	let conn = configDB();
	conn.connect();
	let email = req.body.email || "";
	let password = req.body.password || "";
	let name = req.body.name || "";
	let phone = req.body.telephone || "";

	let sqlCheck = `SELECT count(*) AS count FROM \`users\` WHERE email = ?`;
	conn.query(sqlCheck, [email], (err, results, fields) => {
		if (err) throw err;
		console.log(">>>>>" + results + ">>>>>");

		if (results[0].count > 0) {
			res.status(200).send(`
                <!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <link rel="stylesheet" href="/css/styles.css" />

                            <link
                                href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                                rel="stylesheet"
                                id="bootstrap-css"
                            />

                            <link rel="stylesheet" href="/css/login.css" />
                            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                            <title>Register</title>
                        </head>
                        <body>
                            <h1>Username Already Used!!!</h1>
                            <a href="/register" class="btn btn-success" style="background-color:rgb(20,150,250)">Back</a>
                        </body>
                    </html>
            `);
			return;
		}

		let sql = `INSERT INTO \`users\` (email,password,name,phone,role) 
                VALUES (?,?,?,?,'user')`;

		const hash = crypto
			.createHash("sha256")
			.update(password + password_salt)
			.digest("base64");
		conn.query(sql, [email, hash, name, phone], (err, results, fields) => {
			if (err) throw err;

			res.status(200).send(`
                <!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <link rel="stylesheet" href="/css/styles.css" />

                            <link
                                href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                                rel="stylesheet"
                                id="bootstrap-css"
                            />

                            <link rel="stylesheet" href="/css/login.css" />
                            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                            <title>Register</title>
                        </head>
                        <body>
                            <h1>Register successful, Please Login</h1>
                            <a href="/login" class="btn btn-success" style="background-color:rgb(20,150,250)">Login</a>
                        </body>
                    </html>
            `);
		});
	});
});

app.get("/dashboard", (req, res) => {
	if (req.session.username != undefined) {
		res.render("dashboard/index", {
			name: req.session.username,
			role: req.session.userrole,
		});
	} else {
		res.redirect("/login");
	}
});

app.get("/dashboard/user", (req, res) => {
	if (req.session.username != undefined) {
		let conn = configDB();
		conn.connect();
		let email = req.session.email || "";
		let sqlCheck = "";
		if (req.session.userrole == "admin") {
			sqlCheck = `SELECT * FROM \`users\` ORDER BY id`;
		} else {
			sqlCheck = `SELECT * FROM \`users\` WHERE email = ? ORDER BY id`;
		}

		conn.query(sqlCheck, [email], (err, results, fields) => {
			if (err) throw err;
			res.render("dashboard/user_manage", {
				users: results,
			});
		});

		conn.end();
	} else {
		res.redirect("/login");
	}
});

app.post("/dashboard/user/edit", (req, res) => {
	if (req.session.username != undefined) {
		let conn = configDB();
		conn.connect();
		let newrole = req.body.newrole || "";
		let id = req.body.id || "";

		let sqlCheck = "UPDATE `users` SET `role` = ? WHERE id = ?";

		conn.query(sqlCheck, [newrole, id], (err, results, fields) => {
			if (err) throw err;
			res.status(200).send(showMassage("แก้ไข User role เรียบร้อยแล้ว"));
		});
		conn.end();
	} else {
		res.redirect("/login");
	}
});

app.get("/dashboard/property", (req, res) => {
	if (req.session.username != undefined) {
		let conn = configDB();
		conn.connect();
		let email = req.session.email || "";
		let sqlCheck = "SELECT * FROM `w701_test_properties` ORDER BY id";

		conn.query(sqlCheck, [email], (err, results, fields) => {
			if (err) throw err;
			res.render("dashboard/property_manage", {
				properties: results,
			});
		});

		conn.end();
	} else {
		res.redirect("/login");
	}
});

app.get("/dashboard/property/edit", (req, res) => {
	if (req.session.username != undefined) {
		let conn = configDB();
		conn.connect();

		let id = req.query.id || "";

		let sqlCheck = `SELECT * FROM \`w701_test_properties\` WHERE id = ? ORDER BY id`;
		conn.query(sqlCheck, [id], (err, results) => {
			if (err) throw err;
			res.render("dashboard/property_manage_edit.ejs", {
				item: results[0],
			});
		});
		conn.end();
	} else {
		res.redirect("/login");
	}
});

let filenameToUpload = [
	{ name: "image", maxCount: 5 }
];
app.post(
	"/dashboard/property/edit",
	upload.fields(filenameToUpload),
	(req, res) => {
		if (req.session.username != undefined) {
			let conn = configDB();
			conn.connect();

			for (let i = 0; i < +req.files.image.length; i++) {
				let targetPath = path.join(__dirname,"/property/" + req.files.image[i].originalname);

				let canUseFile = [true,true,true,true,true];
				if (
					path.extname(req.files.image[i].originalname)
						.toLowerCase === ".png" ||
					path.extname(req.files.image[i].originalname)
						.toLowerCase === ".jpg" ||
					path.extname(req.files.image[i].originalname)
						.toLowerCase === ".jpeg"
				) {
					fs.rename(req.files.image[i].path, targetPath, (err) => {
						if (err) return handleError(err, res);
					});
				} else {
					fs.unlink(req.files.image[i].path, (err) => {
						if (err) return handleError(err, res);
						canUseFile[i] = false;
					});
				}

				let id = req.body.id || "";
				let real_estate_name = req.body.real_estate_name || "";
				let lat = req.body.lat || "";
				let lon = req.body.lon || "";
				let LOCATION = req.body.LOCATION || "";
				let property_type = req.body.property_type || "";
				let TRANSACTION = req.body.TRANSACTION || "";
				let SALE_TERMS = req.body.SALE_TERMS || "";
				let SALE_PRICE = req.body.SALE_PRICE || "";
				let RENT_PRICE = req.body.RENT_PRICE || "";
				let COMMON_CHARGES = req.body.COMMON_CHARGES || "";
				let DECORATION_STYLE = req.body.DECORATION_STYLE || "";
				let BEDROOMS = req.body.BEDROOMS || "";
				let BATHROOMS = req.body.BATHROOMS || "";
				let DIRECTION_OF_ROOM = req.body.DIRECTION_OF_ROOM || "";
				let UNIT_SIZE = req.body.UNIT_SIZE || "";
				let LAND_AREA = req.body.LAND_AREA || "";
				let INROOM_FACILITIES = req.body.INROOM_FACILITIES || "";
				let PUBLIC_FACILITIES = req.body.PUBLIC_FACILITIES || "";
				let image_01 = req.files.image[i].originalname || "";
				let image_02 = req.files.image[i].originalname || "";
				let image_03 = req.files.image[i].originalname || "";
				let image_04 = req.files.image[i].originalname || "";
				let image_05 = req.files.image[i].originalname || "";
				console.log("test");
				if(!canUseFile[0]) {image_01 = ""};
				if(!canUseFile[1]) {image_02 = ""};
				if(!canUseFile[2]) {image_01 = ""};
				if(!canUseFile[3]) {image_01 = ""};
				if(!canUseFile[4]) {image_01 = ""};

				let sqlCheck = `
					UPDATE \`w701_test_properties\` SET 
					\`id\`= ?,
					\`real_estate_name\`= ?,
					\`lat\`= ?,
					\`lon\`= ?,
					\`LOCATION\`= ?,
					\`property_type\`= ?,
					\`TRANSACTION\`= ?,
					\`SALE_TERMS\`= ?,
					\`SALE_PRICE\`= ?,
					\`RENT_PRICE\`= ?,
					\`COMMON_CHARGES\`= ?,
					\`DECORATION_STYLE\`= ?,
					\`BEDROOMS\`= ?,
					\`BATHROOMS\`= ?,
					\`DIRECTION_OF_ROOM\`= ?,
					\`UNIT_SIZE\`= ?,
					\`LAND_AREA\`= ?,
					\`INROOM_FACILITIES\`= ?,
					\`PUBLIC_FACILITIES\`= ?,
					\`image_01\`= ?,
					\`image_02\`= ?,
					\`image_03\`= ?,
					\`image_04\`= ?,
					\`image_05\`= ?
					WHERE id = ?;`;

				conn.query(
					sqlCheck,
					[
						id,
						real_estate_name,
						lat,
						lon,
						LOCATION,
						property_type,
						TRANSACTION,
						SALE_TERMS,
						SALE_PRICE,
						RENT_PRICE,
						COMMON_CHARGES,
						DECORATION_STYLE,
						BEDROOMS,
						BATHROOMS,
						DIRECTION_OF_ROOM,
						UNIT_SIZE,
						LAND_AREA,
						INROOM_FACILITIES,
						PUBLIC_FACILITIES,
						image_01,
						image_02,
						image_03,
						image_04,
						image_05,
						id,
					],
					(err, results) => {
						if (err) throw err;
						res.redirect("/dashboard/property");
					}
				);
				conn.end();
			}
		} else {
			res.redirect("/login");
		}
	}
);

app.get("/dashboard/logout", (req, res) => {
	res.redirect("/login");
});

app.listen(3000, () => {
	console.log("App Started ... on PORT 3000");
});
