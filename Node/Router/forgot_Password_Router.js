
// forget_Password_Router.js (Node)

const express = require('express');
const { forgotPassword_Controller } = require('../Controler/ForgotPassword_Controller');

const forget_Password_Router = express.Router();

forget_Password_Router.post("/forgot-password", forgotPassword_Controller)

exports.forget_Password_Router = forget_Password_Router;


