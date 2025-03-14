
// delete_Turf_Router.js (Node)

const express = require('express');
const { delete_Turf_Controller } = require('../../Controler/Admin/Delete_Turf_Controller');

const delete_Turf_Router = express.Router();

delete_Turf_Router.delete("/delete-turf", delete_Turf_Controller);

exports.delete_Turf_Router = delete_Turf_Router;