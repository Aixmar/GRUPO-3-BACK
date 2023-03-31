const { Router } = require("express");

const { postNewSale, getAllSales } = require("../handlers/salesHandlers");


const salesRouter = Router();

salesRouter.get("/", getSales);
salesRouter.post("/", postNewSale);
salesRouter.get("/", getAllSales);

module.exports = salesRouter;