const { Router } = require("express");
const {
  postRegisterEmail,
  postBuyEmail,
} = require("../handlers/emailsHandlers");

const mailsRouter = Router();

mailsRouter.post("/register", postRegisterEmail);
mailsRouter.post("/buyitem", postBuyEmail);

module.exports = mailsRouter;
