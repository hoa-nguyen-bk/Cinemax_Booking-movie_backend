'use strict';

const express = require("express");
const movieRouter = require("./movies");

//rôi router từ thằng express
const rootRouter = express.Router();

rootRouter.use('/movies', movieRouter);

//define ra đường dẫn chính/phụ
rootRouter.get('/',(request, response) => {
  response.send('hello word')
})


module.exports = rootRouter;
