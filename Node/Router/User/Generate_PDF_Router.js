
// generate_PDF_Router.js (Node)

const express = require('express');
const { generate_PDF_Controller } = require('../../Controler/User/Generate_PDF_Controller');

const generate_PDF_Router = express.Router();

generate_PDF_Router.post("/generate-pdf", generate_PDF_Controller);

exports.generate_PDF_Router = generate_PDF_Router;


