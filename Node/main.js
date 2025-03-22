
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
const { delete_Turf_Router } = require("./Router/Admin/Delete_Turf_Router");
const { search_Available_Turf_Router } = require("./Router/User/Search_Available_Turf_Router");
const { selected_Available_Slote_Router } = require("./Router/User/Selected_Available_Slote_Router");
const { payment_Router } = require("./Router/User/Payment_Router");
const { verifyPaymentRouter } = require("./Router/User/verify_Payment_Router");
const { generate_PDF_Router } = require("./Router/User/Generate_PDF_Router");
const { View_Booking_Using_Player_Id_Router } = require("./Router/User/View_Booking_Using_Player_Id_Router");
const { forget_Password_Router } = require("./Router/forgot_Password_Router");
const { reset_Password_Router } = require("./Router/reset_Password_Router");
const { get_Reset_Password_Page_Router } = require("./Router/get_Reset_Password_Page_Router");



const app = express();

app.use(cors({ origin: "http://localhost:5173", credential: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(signUp_Router);
app.use(login_Router);
app.use(forget_Password_Router);
app.use(reset_Password_Router);
app.use(get_Reset_Password_Page_Router)

// Admin
app.use(Add_Turf_Submit_Router);
app.use(View_All_Turf_List_Router);
app.use(find_Turf_Using_Area_Router);
app.use(Final_Update_Turf_Router);
app.use(delete_Turf_Router);


// User
app.use(search_Available_Turf_Router);
app.use(selected_Available_Slote_Router);
app.use(payment_Router)
app.use(verifyPaymentRouter);
app.use(generate_PDF_Router);
app.use(View_Booking_Using_Player_Id_Router);


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


