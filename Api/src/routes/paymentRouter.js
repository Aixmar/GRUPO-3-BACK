const { Router } = require("express");
const paymentRouter = Router();

const { postPaymentHandler } = require("../handlers/paymentHandlers");

paymentRouter.post("/", postPaymentHandler);

module.exports = paymentRouter;
