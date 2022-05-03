const { Router } = require('express');

const userController = require('../controllers/user.controller');

const userRouter = Router();


userRouter.get('/', userController.getAllUsers);

userRouter.post('/', userController.createUser);

userRouter.get('/:userIndex', userController.getUserById);


module.exports = userRouter;