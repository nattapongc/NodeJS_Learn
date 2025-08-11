const express = require("express");
const crypto = require("crypto");
const app = express();
let mysql = require("mysql");
const password_salt = "เรียนเขียนโปรแกรมที่ EPT สนุกจังเลย";

app.set("view engine", "ejs");
app.set("views", "views");
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/property", express.static(__dirname + "/property"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let configDB = () => {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password : "",
        database: "property",
    });
}

app.get("/", (req, res) => {
	res.render("property_view", {items : []});
});

app.get("/search", (req, res) => {
    let conn = configDB();
    conn.connect();
    let keyword = '%' + req.query.keyword + '%' || '';
    let sql = "SELECT * FROM w701_test_properties WHERE real_estate_name LIKE ? OR LOCATION LIKE ?;";
    
    conn.query(sql,[keyword,keyword],(err,results,fields) => {
        if(err) throw err;
        res.render("property_view",{items : results});
    });
});

app.get("/property_detail/:id", (req, res) => {
    let conn = configDB();
    conn.connect();
    let id = req.params.id || 0;
    let sql = "SELECT * FROM w701_test_properties WHERE id = ?;";
    
    conn.query(sql,[id],(err,results,fields) => {
        if(err) throw err;
        res.render("property_detail",{item : results[0]});
    });
});

app.get("/login", (req,res) => {
    let password_wrong = req.query.password || "";
    if(password_wrong == "wrong") {
        password_wrong = true;
    } else {
        password_wrong = false;
    }

    res.render("login", {password_wrong : password_wrong});
})

app.post("/login", (req,res) => {
    let user = req.body.email || "";
    let password = req.body.password || "";

    let conn = configDB();
    conn.connect();

    const hash = crypto.createHash('sha256').update(password+password_salt).digest('base64');

    let sqlCheck = `SELECT count(*) AS count FROM \`users\` WHERE email = ? AND password = ?`;
    conn.query(sqlCheck, [user,hash], (err, results, fields)=> {
        if(err) throw err;
        if(results[0].count > 0) {
            res.status(200).send(`OK`);
        }
        else {
            console.log(`Username : ${user} , Password : ${hash}`);
            res.redirect("/login?password=wrong")
        }
        conn.end();
    });

})



app.get("/register", (req,res) => {
    res.render("register");
    
})

app.post("/register", (req,res) => {
    let conn = configDB();
    conn.connect();
    let email = req.body.email || "";
    let password = req.body.password || "";
    let name = req.body.name || "";
    let phone = req.body.telephone || "";


    let sqlCheck = `SELECT count(*) AS count FROM \`users\` WHERE email = ?`;
    conn.query(sqlCheck,[email], (err,results,fields) => {
        if(err) throw err;
        console.log(">>>>>" + results + ">>>>>");

        if(results[0].count > 0) {
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
            `)
            return;
        }

        let sql = `INSERT INTO \`users\` (email,password,name,phone,role) 
                VALUES (?,?,?,?,'user')`;
    
        const hash = crypto.createHash('sha256').update(password+password_salt).digest('base64');
        conn.query(sql,[email,hash,name,phone],(err,results,fields) => {
            if(err) throw err;
            
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
            `)
        });


    });


    
})

app.listen(3000, () => {
	console.log("App Started ... on PORT 3000");
});
