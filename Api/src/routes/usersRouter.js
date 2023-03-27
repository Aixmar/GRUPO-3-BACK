const { Router } = require('express');
const usersRouter = Router();
const {putUpdatePurchase,putUpdateCart, getAllUsersHandler, postUserHandler, getUserByIdHandler,postUserLoginHandler,refreshTokenHandler ,logOutHandler,putUserHandler, updateEmailHandler, updatePasswordHandler} = require('../handlers/usersHandlers');

usersRouter.get('/', getAllUsersHandler);
// usersRouter.get('/:id', userByIdHandler);

usersRouter.post('/', postUserHandler);
usersRouter.put('/image', putUserHandler);
usersRouter.put('/updateCart', putUpdateCart);
usersRouter.put('/updateCartPurchase', putUpdatePurchase);
usersRouter.put('/email', updateEmailHandler);
usersRouter.put('/password', updatePasswordHandler);
usersRouter.post('/login', postUserLoginHandler);
usersRouter.get('/refresh', refreshTokenHandler);
usersRouter.get('/logout', logOutHandler);
usersRouter.get('/:id', getUserByIdHandler);

module.exports = usersRouter;