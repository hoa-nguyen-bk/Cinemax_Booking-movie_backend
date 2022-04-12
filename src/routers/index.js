'use strict';

const express = require("express");
const movieRouter = require("./movies");
const userRouter = require("./users");

//rôi router từ thằng express
const rootRouter = express.Router();

//dùng thẳng middleware ở đây luôn để khỏi authenticate từng cái
rootRouter.use('/movies', movieRouter);
rootRouter.use('/users', userRouter);

//define ra đường dẫn chính/phụ
rootRouter.get('/',(request, response) => {
  response.send('hello word')
})


module.exports = rootRouter;
