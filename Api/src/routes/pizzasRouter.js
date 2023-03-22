const { Router } = require("express");
const {
  getPizzasHandler,
  postPizzaHandler,
  getPizzaHandler,
  putPizzaHandler,
  deletePizzaHandler,
} = require("../handlers/pizzasHandlers");
const pizzasRouter = Router();

pizzasRouter.get("/", getPizzasHandler);
pizzasRouter.post("/", postPizzaHandler);
pizzasRouter.get("/:id", getPizzaHandler);
pizzasRouter.put("/:id", putPizzaHandler)
pizzasRouter.delete("/:id",deletePizzaHandler)

module.exports = pizzasRouter;
