

const express = require("express");
import movieRouter from "./movies";
import ticketRouter from "./tickets";
import userRouter from "./users";

//rôi router từ thằng express
const rootRouter = express.Router();

//dùng thẳng middleware ở đây luôn để khỏi authenticate từng cái
rootRouter.use('/movies', movieRouter);
rootRouter.use('/users', userRouter);
rootRouter.use('/ticket', ticketRouter);

//define ra đường dẫn chính/phụ
rootRouter.get('/',(request, response) => {
  response.send('hello word')
})


export default rootRouter;
