
const express = require('express');
const { getResetPasswordPage } = require('../Controler/get_Reset_Password_Controller');

const get_Reset_Password_Page_Router = express.Router();

get_Reset_Password_Page_Router.get("/reset-password/:token", getResetPasswordPage)

exports.get_Reset_Password_Page_Router = get_Reset_Password_Page_Router;

