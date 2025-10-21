const express = require('express');

const userRouter = express.Router();

const { register_user, login_user, logout_user } =  require('../controllers/user.Controller.js');

userRouter
    .post('/auth/register', register_user)
    .post('/auth/login', login_user)
    .post('/auth/logout', logout_user);

// end points

// http://localhost:0000/api/v1/auth/register
// http://localhost:0000/api/v1/auth/login
// http://localhost:0000/api/v1/auth/logout


module.exports = userRouter