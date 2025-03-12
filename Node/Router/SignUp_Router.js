
// SignUp_Router.js (Node)

const express = require('express');
const { signUp_Controller } = require('../Controler/SignUp_Controller');

const signUp_Router = express.Router();

signUp_Router.post("/signup-submit", signUp_Controller);

exports.signUp_Router = signUp_Router;

