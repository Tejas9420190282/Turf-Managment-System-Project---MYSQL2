
// view_Booking_Using_TurfId_Router.js (Node)

const express = require('express');
const { view_Booking_Using_TurfId_Controller } = require('../../Controler/Admin/View_Booking_Using_TufId_Controller');

const view_Booking_Using_TurfId_Router = express.Router();

view_Booking_Using_TurfId_Router.get("/view-booking-using-turfid", view_Booking_Using_TurfId_Controller);

exports.view_Booking_Using_TurfId_Router = view_Booking_Using_TurfId_Router


