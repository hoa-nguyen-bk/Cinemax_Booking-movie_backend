"use strict";
import { genSaltSync, hashSync, compareSync } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import config from "../../config";

const scriptPassword = (password: string) => {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
};

const comparePassword = (password: string, passwordHashed: string) => {
  return compareSync(password, passwordHashed);
};

//parse ra đoạn mã quái gở để fe coi
const genToken = (data: string | object | Buffer) => {
  return sign(data, config.auth.SECRET_KEY, { expiresIn: "1d" });
};

const decodeToken = async (token: string) => {
  return verify(token, config.auth.SECRET_KEY);
};

export {
  genToken,
  decodeToken,
  scriptPassword,
  comparePassword,
};
