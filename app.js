const sqlite3 = require("sqlite3").verbose();
let sql;
// create test.db before --> then how can sqlite make db themselves??
// connect to db
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});
// create a table:
// sql = `CREATE TABLE users(id integer primary key, first_name, last_name, username, password)`;
// db.run(sql);

// drop table:
// db.run("DROP TABLE users");

// insert data:
// sql = `INSERT into users(first_name, last_name, username, password) values (?, ?, ?, ?)`;
// db.run(sql, ["fred", "tommy", "fredtommy", "54654546"], (err) => {
//   if (err) return console.error(err.message);
// });

// update:
// db.run("update users set first_name = ? where id = ?", ["tom", 2], (err) => {
//   if (err) return console.error(err.message);
// });

// delete:
// db.run("delete from users where id = ?", [2], (err) => {
//   if (err) return console.error(err.message);
// });

// query
db.all("select * from users", [], (err, rows) => {
  if (err) return console.error(err.message);
  rows.forEach((row) => console.log(row));
});
