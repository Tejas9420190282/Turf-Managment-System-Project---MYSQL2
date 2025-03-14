
// Final_Update_Turf_Router.js (Node)

const express = require('express');
const { Final_Update_Turf_Controler } = require('../../Controler/Admin/Update_Turf_Controller');

const Final_Update_Turf_Router = express.Router();

Final_Update_Turf_Router.put("/update-turf", Final_Update_Turf_Controler);

exports.Final_Update_Turf_Router = Final_Update_Turf_Router;


/* 
const express = require('express');
const { Final_Update_Turf_Controler } = require('../../Controler/Admin/Update_Turf_Controller');

const Final_Update_Turf_Router = express.Router();

Final_Update_Turf_Router.put("/update-turf", Final_Update_Turf_Controler)

exports.Final_Update_Turf_Router = Final_Update_Turf_Router
 */

