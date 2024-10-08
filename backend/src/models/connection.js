const mysql = require("mysql2/promise");
const env = require("../env/index");

const connection = mysql.createPool({
  host: env.MYSQL_HOST,
  user: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
});

module.exports = connection;
