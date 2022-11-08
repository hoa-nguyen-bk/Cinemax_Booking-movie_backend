"use strict";
const { GroupTheater } = require("../../models");
const { Op } = require("sequelize");

const createGroupTheater = async (groupTheater) => {
  return await GroupTheater.create({
    ...groupTheater,
  })
    .then((newUser) => {
      return newUser;
    })
    .catch((error) => {
      console.log("err", error);
      return error;
    });
};

const getAllGrouptheater = async (maHeThongRap) => {
  if (maHeThongRap !== undefined) {
    return await GroupTheater.findAll({
      where: {
        maHeThongRap,
      },
    })
      .then((res) => res)
      .catch((err) => {
        console.log("err", err);
        return null;
      });
  } else {
    return GroupTheater.findAll()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
};

module.exports = { createGroupTheater, getAllGrouptheater };
