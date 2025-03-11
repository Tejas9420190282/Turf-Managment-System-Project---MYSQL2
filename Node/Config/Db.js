
const mysql = require('mysql2/promise');

const dbConnectionPool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "root",
    database : "turfproject"
})

exports.dbConnectionPool = dbConnectionPool;