
const express = require('express');
const colors = require('colors');
const app = express();

const PORT = 4545;

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`.bgMagenta);    
})