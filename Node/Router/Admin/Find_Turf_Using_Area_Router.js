
// find_Turf_Using_Area_Router.js 

const express = require('express');
const { find_Turf_Using_Area_Controller } = require('../../Controler/Admin/Find_Turf_Using_Area_Controller');


const find_Turf_Using_Area_Router = express.Router();

find_Turf_Using_Area_Router.get("/find-turf-using-area/:area", find_Turf_Using_Area_Controller);

exports.find_Turf_Using_Area_Router = find_Turf_Using_Area_Router;

