"use strict";

import express = require("express");
import config = require("../../config");
import { authenticate } from "../../middleware";
import { uploadAvatar } from "../../middleware/upload";
import { scriptPassword, comparePassword, genToken } from "../../services/auth";
import { createUser, getUserByEmail, getUserById, storageAvatar, getMovieHistoryByUser, getAllUser } from "../../services/users";

const userRouter = express.Router();
userRouter.get("/", async (req, res) => {
  const users = await getAllUser();
  if (!users) {
    res.status(500).send("Cannot get users list");
  }
  res.send(users);
});

userRouter.post("/sign-up", async (req, res) => {
  const { firstName, lastName, email, birthday, password, phoneNumber } =
    req?.body;
  if (!email || !email.trim() || !password || !password.trim()) {
    return await res.status(400).send("error: must field email or pass");
  }

  return await createUser({
    firstName,
    lastName,
    email,
    birthday,
    password: scriptPassword(password),
    phoneNumber,
    role: 'user'
  })
    .then((response) => {
      const result = { ...response };
      delete result.password;
      return res.status(201).send(response);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

userRouter.post("/sign-in", async (req, res) => {
  const { email, password } = req?.body;
  //check valid data input
  if (!email) {
    return res.status(400).send(`Please fill Email`);
  } else if (!password) {
    return res.status(400).send(`Please fill password`);
  }
  //
  const user = await getUserByEmail(email);
  if (!user) {
    return res.status(400).send(`Email ${email} is not exist`);
  }
  const isMatchPassword = comparePassword(password, user.password);
  if (!isMatchPassword) {
    return res.status(400).send("Password is not correct");
  }
  const token = genToken({id: user.id});
  return res.status(200).send({user,token});
});
const path = 'public/images/avatar';
userRouter.post('/avatar', [authenticate, uploadAvatar(path)], async(req,res) => {
  const {file,user} = req;
  const url = `${config.SYSTEMS.HOST}${config.SYSTEMS.PORT}/${file?.path}`;
  const storeAvatar = await storageAvatar(user.id,url);
  return res.status(200).send(storeAvatar)
})

//lấy danh sách phim mà user đã xem
userRouter.get('/history', [authenticate], async(req,res) => {
  const {user} = req;
  // chỗ này user đc lấy từ sequelize nên chỉ cần tạo cái alias bên models, thì có thể get movie đc
  // const data = await user.getMovies()
  //còn đây là cách truyền thống
  const data = await getMovieHistoryByUser(user.id);
  if(!data){
    return res.status(500).send('cannot get data');
  }
  return res.status(200).send(data)
})




export default  userRouter;
