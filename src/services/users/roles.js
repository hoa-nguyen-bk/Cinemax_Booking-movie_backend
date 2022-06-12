"use strict";

const { Role } = require("../../models");
const getListRole = async () => {
  return await Role.findAll({
    attributes: ["type", "description"],
  })
    .then((res) => res)
    .catch((err) => {
      console.log(err);
      return null;
    });
};
const checkRoleExist = async (type) => {
  return await Role.findOne({
    where: {
      type,
    },
  })
    .then((res) => {
      console.log({res});
      return res
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
const getListUserByRole = async (typeId) => {
  return await Role.findByPk(typeId, { include: ["user"] })
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};
module.exports = { getListRole, checkRoleExist, getListUserByRole };
