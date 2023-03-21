const ingredientsRouter = require("./ingredientsRouter");
const { Router } = require("express");
const pizzasRouter = require("./pizzasRouter");
const router = Router();
const usersRouter = require("./usersRouter");
const mailsRouter = require("./mailsRouter");

router.use("/ingredients", ingredientsRouter);
router.use("/pizzas", pizzasRouter);
router.use("/users", usersRouter);
router.use("/sendmail", mailsRouter);

module.exports = router;
