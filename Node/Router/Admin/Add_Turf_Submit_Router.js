const express = require('express');
const { Add_Turf_Submit_Controller } = require('../../Controler/Admin/Add_Turf_Submit_Controller');

const Add_Turf_Submit_Router = express.Router();

Add_Turf_Submit_Router.post("/add-turf-submit", Add_Turf_Submit_Controller);

exports.Add_Turf_Submit_Router = Add_Turf_Submit_Router;
