const { Router } = require("express");
const { postNewSale,getSales } = require("../handlers/salesHandlers");


const salesRouter = Router();

salesRouter.get("/", getSales);
salesRouter.post("/", postNewSale);

module.exports = salesRouter;