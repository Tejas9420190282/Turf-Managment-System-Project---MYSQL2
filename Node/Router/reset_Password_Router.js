

// reset_Password_Router.js (Node)

const express = require('express');
const { forgotPassword_Controller } = require('../Controler/ForgotPassword_Controller');
const { resetPassword_Controller } = require('../Controler/ResetPassword_Controller');

const reset_Password_Router = express.Router();

reset_Password_Router.post("/reset-password/:token", resetPassword_Controller)

exports.reset_Password_Router = reset_Password_Router;


