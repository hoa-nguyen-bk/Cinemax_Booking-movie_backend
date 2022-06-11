"use strict";

const express = require("express");
const config = require("../../config");
const { authenticate } = require("../../middleware");
const { uploadAvatar } = require("../../middleware/upload");
const {
  scriptPassword,
  comparePassword,
  genToken,
} = require("../../services/auth");
const {
  createUser,
  getUserByEmail,
  getUserById,
  storageAvatar,
  getMovieHistoryByUser,
  getAllUser,
  checkNullUserId,
  updateUserbyId,
  deleteUserById,
} = require("../../services/users");

const userRouter = express.Router();
userRouter.get("/", async (req, res) => {
  const { current, pageSize, search } = req?.query;

  const users = await getAllUser({ current, pageSize, search });
  if (!users) {
    return res.status(500).send("Cannot get users list");
  }
  const result = {
    totalPages: users.pages,
    totalCount: users.count,
    items: users.result,
  };
  return res.send(result);
});
//lấy detail
userRouter.get(`/:id`, async (req, res) => {
  const { id } = req.params;
  const userDetail = await getUserById(id);
  if (!userDetail) {
    return res.status(500).send(`User ${id} is not exist`);
  }
  return res.status(201).send(userDetail);
});

//cập nhật thông tin user
userRouter.put(`/:id`, async (req, res) => {
  const { lastName, firstName, email, birthday, phoneNumber, password } =
    req?.body;
  const { id = "" } = req?.params;
  const isExistUser = await checkNullUserId(id);
  if (!isExistUser) {
    return res.status(404).send(`User ${id} is not exist`);
  }
  if (!firstName || !lastName || !email) {
    return await res
      .status(400)
      .send("error: must field firstName, last name and email");
  }
  return await updateUserbyId(id, {
    firstName,
    lastName,
    birthday,
    email,
    phoneNumber,
    password: scriptPassword(password),
  })
    .then((result) => {
      return res.status(201).send(req?.body);
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
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
    role: "user",
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
  const token = genToken({ id: user.id });
  return res.status(200).send({ user, token });
});
const path = "public/images/avatar";
userRouter.post(
  "/avatar",
  [authenticate, uploadAvatar(path)],
  async (req, res) => {
    const { file, user } = req;
    const url = `${config.SYSTEMS.HOST}${config.SYSTEMS.PORT}/${file?.path}`;
    const storeAvatar = await storageAvatar(user.id, url);
    return res.status(200).send(storeAvatar);
  }
);

//lấy danh sách phim mà user đã xem
userRouter.get("/history", [authenticate], async (req, res) => {
  const { user } = req;
  // chỗ này user đc lấy từ sequelize nên chỉ cần tạo cái alias bên models, thì có thể get movie đc
  // const data = await user.getMovies()
  //còn đây là cách truyền thống
  const data = await getMovieHistoryByUser(user.id);
  if (!data) {
    return res.status(500).send("cannot get data");
  }
  return res.status(200).send(data);
});



//delete
userRouter.delete(`/:id`, async (req, res) => {
  const { id } = req.params;
  const isExistUser = await checkNullUserId(id);
    // check user is exist by id 
  if (!isExistUser) {
    return res.status(404).send(`User ${id} is not exist`);
  }
  const userDeleted = await deleteUserById(id);
  if (!userDeleted) {
    return res.status(500).send(`user ${id} cannot delete`);
  }
  return res.status(201).send(`Delete user ${id} success`);
});


module.exports = userRouter;
