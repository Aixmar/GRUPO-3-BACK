const { Router } = require("express");

const router = Router();

const ingredientsRouter = require("./ingredientsRouter");
const pizzasRouter = require('./pizzasRouter');
const usersRouter = require('./usersRouter');
const paymentRouter = require('./paymentRouter')
const mailsRouter = require("./mailsRouter");
const salesRouter = require("./salesRouter");
const ordersRouter = require('./ordersRouter')

router.use("/ingredients", ingredientsRouter);
router.use("/pizzas", pizzasRouter);
router.use("/users", usersRouter);
router.use('/process_payment', paymentRouter);
router.use("/sendmail", mailsRouter);
router.use("/sales", salesRouter);
router.use("/orders", ordersRouter);

module.exports = router;
