const mysql = require("mysql");

class MySQLDatabase {
	getConfig() {
		return {
			host: "localhost",
			user: "root",
			password: "",
			database: "shop",
		};
	}

	openDatabaseConnection(config) {
        return new Promise((resolve,reject) => {
            let conn = mysql.createConnection(config);
            console.log("config = " + config);
            conn.connect((err) => {
                if(err) {
                    console.log("ERROR1");
                    reject(err);
                    return;
                }

                resolve(conn);
            });
        });
	}

    getAllData(conn) {
        return new Promise((resolve,reject) => {
            let sql = `SELECT id,name,stock,price FROM  \`products\` ORDER BY id;`;

            conn.query(sql, (err, result, field) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
        
    }

}

exports.MySQLDatabase = MySQLDatabase;