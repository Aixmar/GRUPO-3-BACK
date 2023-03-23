const { Router } = require("express");

const router = Router();

const ingredientsRouter = require("./ingredientsRouter");
const pizzasRouter = require('./pizzasRouter');
const usersRouter = require('./usersRouter');
const paymentRouter = require('./paymentRouter')
const mailsRouter = require("./mailsRouter");

router.use("/ingredients", ingredientsRouter);
router.use("/pizzas", pizzasRouter);
router.use("/users", usersRouter);
router.use('/process_payment', paymentRouter);
router.use("/sendmail", mailsRouter);

module.exports = router;
