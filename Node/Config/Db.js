
// Db.js (Node)

const mysql = require('mysql2/promise');

const mySqlConnectionPool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "root",
    database : "turfproject"
})

exports.mySqlConnectionPool = mySqlConnectionPool;