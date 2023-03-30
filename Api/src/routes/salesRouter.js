const { Router } = require("express");
const { postNewSale } = require("../handlers/salesHandlers");

const salesRouter = Router();

salesRouter.post("/", postNewSale);

module.exports = salesRouter;