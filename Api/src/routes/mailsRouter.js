const { Router } = require("express");
const {
  sendRegisterEmail,
  postRegisterEmail,
} = require("../handlers/emailsHandlers");

const mailsRouter = Router();

mailsRouter.post("/register", postRegisterEmail);

module.exports = mailsRouter;
