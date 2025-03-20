
// payment_Router.js (node)

const express = require('express');
const { payment_Controller } = require('../../Controler/User/Payment_Controller');

const payment_Router = express.Router();

payment_Router.post("/payment", payment_Controller);

exports.payment_Router = payment_Router;

