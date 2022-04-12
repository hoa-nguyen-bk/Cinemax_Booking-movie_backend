"use strict";
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {auth: {SECRET_KEY}} = require("../../config");

const scriptPassword = (password) => {
  const salt = bcryptjs.genSaltSync(10);
  return bcryptjs.hashSync(password, salt);
};

const comparePassword = (password, passwordHashed) => {
  return bcryptjs.compareSync(password, passwordHashed);
};

//parse ra đoạn mã quái gở để fe coi
const genToken = (data) => {
  return jwt.sign(data, SECRET_KEY, { expiresIn: "1d" });
};

const decodeToken = async (token) => {
  return jwt.verify(token, SECRET_KEY);
}

module.exports = {
  genToken,
  decodeToken,
  scriptPassword,
  comparePassword,
};
