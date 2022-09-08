"use strict";

//đầu tiên: yarn init -y
//yarn add nodemon và express
// đưa nodemon vào devDependencies
const cors = require("cors");
const express = require("express");
const rootRouter = require("./src/routers");
const path = require("path");
const { sequelize } = require("./src/models");
const {
  SYSTEMS: { PORT },
} = require("./src/config");
const { logger } = require("./src/middleware/logger");
const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./src/graphql/schema");
const { graphqlResolves } = require("./src/graphql/resolvers");

//thằng app này sẽ là app cha bao hết ứng dụng
const app = express();

app.use(cors());

app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "public")));
const mainUrl = "/api/v1";
//dùng logger ở đây để tất cả request đều qua đây
app.use(logger);
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

const PORT2 = process.env.PORT || PORT;
app.listen(PORT2, () => {
  console.log("app listen to port ", PORT2);
});
