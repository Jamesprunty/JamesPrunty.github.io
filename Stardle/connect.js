var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql4.freesqldatabase.com",
  user: "sql4481107",
  password: "FG8QPNs5q3"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});