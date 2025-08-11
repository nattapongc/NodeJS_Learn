const express = require("express");
const app = express();
let mysql = require("mysql");

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

app.listen(3000, () => {
	console.log("App Started ... on PORT 3000");
});
