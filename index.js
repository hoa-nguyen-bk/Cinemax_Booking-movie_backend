"use strict";

//đầu tiên: yarn init -y
//yarn add nodemon và express
// đưa nodemon vào devDependencies

const express = require("express");
const rootRouter = require("./src/routers");
const { sequelize } = require("./models");

//thằng app này sẽ là app cha bao hết ứng dụng
const app = express();

app.use(express.json());
const mainUrl = "/api/v1";

//lẩy rootRouter ra import zô đây mới ăn
app.use(mainUrl, rootRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const port = 3000;
app.listen(port, () => {
  console.log("app listen to port ", port);
});
