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

module.exports = {
  createSystemTheater,
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
