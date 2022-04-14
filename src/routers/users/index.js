"use strict";

const express = require("express");
const config = require("../../config");
const { authenticate } = require("../../middleware");
const { uploadAvatar } = require("../../middleware/upload");
const { scriptPassword, comparePassword, genToken } = require("../../services/auth");
const { createUser, getUserByEmail, getUserById, storageAvatar } = require("../../services/users");

const userRouter = express.Router();
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

module.exports = userRouter;
