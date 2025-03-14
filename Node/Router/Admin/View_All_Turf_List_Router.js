
// View_All_Turf_List_Router.js (Node)

const express = require('express');
const { View_All_Turf_List_Controler } = require('../../Controler/Admin/View_All_Turf_List_Controler');

const View_All_Turf_List_Router = express.Router();

View_All_Turf_List_Router.get("/admin/view-all-turf", View_All_Turf_List_Controler)

exports.View_All_Turf_List_Router = View_All_Turf_List_Router;

