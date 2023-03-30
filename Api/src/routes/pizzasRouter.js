const { Router } = require("express");
const {
  getPizzasHandler,
  postPizzaHandler,
  getPizzaHandler,
  putPizzaHandler,
  deletePizzaHandler,
  putPizzaReviewsHandler
} = require("../handlers/pizzasHandlers");
const pizzasRouter = Router();

pizzasRouter.get("/", getPizzasHandler);

pizzasRouter.post("/", postPizzaHandler);
pizzasRouter.get("/:id", getPizzaHandler);
pizzasRouter.put("/:id", putPizzaHandler)
pizzasRouter.put("/reviews/:id", putPizzaReviewsHandler)
pizzasRouter.delete("/:id",deletePizzaHandler)

module.exports = pizzasRouter;
