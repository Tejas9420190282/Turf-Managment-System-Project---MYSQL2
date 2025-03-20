

// Login_Router.js (Node)

const express = require('express');
const { login_Controller } = require('../Controler/Login_Controller');

const login_Router = express.Router();

login_Router.post("/login-submit", login_Controller)

exports.login_Router = login_Router;

