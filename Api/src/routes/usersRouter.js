const { Router } = require('express');
const usersRouter = Router();
const { getAllUsersHandler, postUserHandler, userByIdHandler,postUserLoginHandler,refreshTokenHandler ,logOutHandler,putUserHandler} = require('../handlers/usersHandlers');

usersRouter.get('/', getAllUsersHandler);
// usersRouter.get('/:id', userByIdHandler);

usersRouter.post('/', postUserHandler);
usersRouter.put('/image', putUserHandler);
usersRouter.post('/login', postUserLoginHandler);
usersRouter.get('/refresh', refreshTokenHandler);
usersRouter.get('/logout', logOutHandler);


module.exports = usersRouter;