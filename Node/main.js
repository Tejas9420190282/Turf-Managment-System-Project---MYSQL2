// main.js (Node)

const express = require("express");
const colors = require("colors");
const { mySqlConnectionPool } = require("./Config/Db");
const bodyParser = require("body-parser");
const { signUp_Router } = require("./Router/SignUp_Router");
const cors = require("cors");
const { login_Router } = require("./Router/Login_Router");
const { Add_Turf_Submit_Router } = require("./Router/Admin/Add_Turf_Submit_Router");
const { View_All_Turf_List_Router } = require("./Router/Admin/View_All_Turf_List_Router");
const { find_Turf_Using_Area_Router } = require("./Router/Admin/Find_Turf_Using_Area_Router");
const { Final_Update_Turf_Router } = require("./Router/Admin/Update_Turf_Router");



const app = express();

app.use(cors({ origin: "http://localhost:5173", credential: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(signUp_Router);
app.use(login_Router);


// Admin
app.use(Add_Turf_Submit_Router);
app.use(View_All_Turf_List_Router);
app.use(find_Turf_Using_Area_Router);
app.use(Final_Update_Turf_Router);

const PORT = 4545;

mySqlConnectionPool
    .query("SELECT 1")
    .then(() => {
        console.log("turfProject Database connected Successfully".bgGreen);

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`.bgMagenta);
        });
    })
    .catch((error) => {
        console.log(error);
    });


