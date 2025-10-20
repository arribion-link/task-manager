const express = require('express');

const userRouter = express.Router();

const { register_user, login_user } =  require('../controllers/user.Controller.js');

userRouter
    .post('/auth/register', register_user)
    .post('/auth/login', login_user)

module.exports = userRouter