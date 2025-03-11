
// main.js (Node)

const express = require('express');
const colors = require('colors');
const { dbConnectionPool } = require('./Config/Db');
const app = express();

const PORT = 4545;

dbConnectionPool.query("SELECT 1").then(() => {

    console.log("turfProject Database connected Successfully".bgGreen);
    
    app.listen(PORT, () => {

        console.log(`Server running on http://localhost:${PORT}`.bgMagenta);    
    })

}).catch((error) => {

    console.log(error);
})



