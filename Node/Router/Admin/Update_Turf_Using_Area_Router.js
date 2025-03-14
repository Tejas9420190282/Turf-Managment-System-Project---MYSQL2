
const express = require('express');

const Update_Turf_Using_Area_Router = express.Router();

Update_Turf_Using_Area_Router.post("", Update_Turf_Using_Area_Controller);

exports.Update_Turf_Using_Area_Router = Update_Turf_Using_Area_Router;