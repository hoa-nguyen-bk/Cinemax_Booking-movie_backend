"use strict";
const {
  Avatar,
  User,
  Movie,
  Role,
  SystemTheater,
  GroupTheater,
} = require("../../models");
const { Op } = require("sequelize");

const createGroupTheater = async (groupTheater) => {
  return await GroupTheater.create({
    ...groupTheater,
  })
    .then((newUser) => {
      return newUser;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

const getAllGrouptheater = async (maHeThongRap) => {
  return await GroupTheater.findAll({
    where: {
      maHeThongRap,
    },
  })
    .then((res) => res)
    .catch((err) => {
      console.log(err);
      return null;
    });
};

module.exports = {
  createGroupTheater,
  getAllGrouptheater,
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
