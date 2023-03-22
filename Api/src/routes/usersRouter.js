const { Router } = require('express');
const usersRouter = Router();
const { getAllUsersHandler, postUserHandler, userByIdHandler,postUserLoginHandler,refreshTokenHandler ,logOutHandler} = require('../handlers/usersHandlers');

usersRouter.get('/', getAllUsersHandler);

usersRouter.post('/', postUserHandler);
usersRouter.post('/login', postUserLoginHandler);
usersRouter.get('/refresh', refreshTokenHandler);
usersRouter.get('/logout', logOutHandler);


module.exports = usersRouter;