"use strict";
const { Avatar, User, Movie, Role, SystemTheater } = require("../../models");
const { Op } = require("sequelize");

const createSystemTheater = async (systemTheater) => {
  return await SystemTheater.create({
    ...systemTheater,
  })
    .then((newUser) => {
      return newUser;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

const getAllSystemtheater = async (maHeThongRap) => {
  if (maHeThongRap !== undefined) {
    return await SystemTheater.findAll({
      where: {
        tenHeThongRap: { [Op.like]: `%${maHeThongRap}%` },
      },
    })
      .then((res) => res)
      .catch((err) => {
        console.log("err", err);
        return null;
      });
  } else {
    return SystemTheater.findAll()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
};

module.exports = {
  createSystemTheater,
  getAllSystemtheater,
  // getUserByEmail,
  // checkNullUserId,
  // getUserById,
  // getAllUser,
  // storageAvatar,
  // updateUserbyId,
  // getMovieHistoryByUser,
  // getAllUser,
  // deleteUserById,
};
