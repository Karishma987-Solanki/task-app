const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE_NAME,
});

const init = () => {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(
      `CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE_NAME}`,
      function (err, result) {
        if (err) throw err;
        console.log("Database created");
        const userTableSql =
          "CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(50), last_name VARCHAR(50), email VARCHAR(50) UNIQUE, password VARCHAR(50))";
        con.query(userTableSql, function (err, result) {
          if (err) throw err;
          console.log("User Table created");
          const taskTableSql =
            "CREATE TABLE IF NOT EXISTS task (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(100), description VARCHAR(250), created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, modified_at DATETIME NULL, user_id int, CONSTRAINT FK_USERTASK FOREIGN KEY (user_id) REFERENCES user(id))";
          con.query(taskTableSql, function (err, result) {
            if (err) throw err;
            console.log("Task Table created");
          });
        });
      }
    );
  });
};

module.exports = { con, init };
