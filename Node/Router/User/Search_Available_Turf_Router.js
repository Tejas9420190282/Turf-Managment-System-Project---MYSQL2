
// search_Available_Turf_Router.js (Node)

const express = require('express');
const { search_Available_Turf_Controler } = require('../../Controler/User/Search_Available_Turf_Controller');

const search_Available_Turf_Router = express.Router();

search_Available_Turf_Router.get("/search-available-turf-submit", search_Available_Turf_Controler);

exports.search_Available_Turf_Router = search_Available_Turf_Router

