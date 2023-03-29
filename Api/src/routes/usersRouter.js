const { Router } = require("express");
const usersRouter = Router();
const {
  putUpdatePurchase,
  putUpdateCart,
  getAllUsersHandler,
  postUserHandler,
  getUserByIdHandler,
  postUserLoginHandler,
  refreshTokenHandler,
  logOutHandler,
  putUserHandler,
  updateEmailHandler,
  updatePasswordHandler,
  updateFavoritesItems,
  forgotPasswordHandler,
  resetPasswordHandler
} = require("../handlers/usersHandlers");

// usersRouter.get('/:id', userByIdHandler);

//-USER_GET---------------------------------------------//
usersRouter.get("/", getAllUsersHandler);
usersRouter.get("/refresh", refreshTokenHandler);
usersRouter.get("/logout", logOutHandler);
usersRouter.get("/:id", getUserByIdHandler);

//-USER_POST--------------------------------------------//
usersRouter.post("/", postUserHandler);
usersRouter.post("/login", postUserLoginHandler);
usersRouter.post("/forgotPassword", forgotPasswordHandler)

//-USER_PUT--------------------------------------------//
usersRouter.put("/image", putUserHandler);
usersRouter.put("/updateCart", putUpdateCart);
usersRouter.put("/updateCartPurchase", putUpdatePurchase);
usersRouter.put("/email", updateEmailHandler);
usersRouter.put("/password", updatePasswordHandler);
usersRouter.put("/favorites", updateFavoritesItems);
usersRouter.put("/resetPassword/:id/:tokenResetPassword" ,resetPasswordHandler)

module.exports = usersRouter;
