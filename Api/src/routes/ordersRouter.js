const { Router } = require("express");

const { postNewOrders, getAllOrders, deleteOrders } = require("../handlers/ordersHandlers");


const ordersRouter = Router();

// salesRouter.get("/", getSales);
ordersRouter.post("/", postNewOrders);
ordersRouter.get("/", getAllOrders);
ordersRouter.delete('/:id', deleteOrders);

module.exports = ordersRouter;