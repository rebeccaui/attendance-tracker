const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "", //password goes here
    database: "attendance_tracker_db"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected to database as id " + connection.threadId);
});