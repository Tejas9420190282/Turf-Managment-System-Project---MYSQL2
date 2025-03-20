
// verifyPaymentRouter.js (Node)

const express = require('express');
const { verifyPaymentController } = require('../../Controler/User/verify_Payment_Controller');

const verifyPaymentRouter = express.Router();

verifyPaymentRouter.post("/payment/verify", verifyPaymentController);

exports.verifyPaymentRouter = verifyPaymentRouter;



