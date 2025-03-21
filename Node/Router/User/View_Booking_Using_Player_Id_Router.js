

// View_Booking_Using_Player_Id_Router.js (Node)

const express = require('express');
const { View_Booking_Using_Player_Id_Controller } = require('../../Controler/User/View_Booking_Using_Player_Id_Controller');


const View_Booking_Using_Player_Id_Router = express.Router();

View_Booking_Using_Player_Id_Router.get("/view-booking-using-slote-number", View_Booking_Using_Player_Id_Controller);

exports.View_Booking_Using_Player_Id_Router = View_Booking_Using_Player_Id_Router;

