const express = require('express');

const {{name}}Router = express.Router();

{{name}}Router.get("/",(req,res) => {
  res.send("get list movie");
})

module.exports = {{name}}Router