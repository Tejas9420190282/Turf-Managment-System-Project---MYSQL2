
// selected_Available_Slote_Router.js (Node)

const express = require('express');
const { selected_Available_Slote_Controller } = require('../../Controler/User/Selected_Available_Slote_Controller');

const selected_Available_Slote_Router = express.Router();

selected_Available_Slote_Router.post("/selected-available-slote", selected_Available_Slote_Controller)

exports.selected_Available_Slote_Router = selected_Available_Slote_Router;


