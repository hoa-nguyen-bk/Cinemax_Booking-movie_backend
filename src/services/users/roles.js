"use strict";

const { Role } = require("../../models");
const getListRole = async () => {
  return await Role.findAll({
    attributes: ['type','description']
  })
    .then((res) => res)
    .catch((err) => {
      console.log(err);
      return null;
    });
};
module.exports = { getListRole };
