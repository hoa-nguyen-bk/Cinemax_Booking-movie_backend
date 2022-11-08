"use strict";
const { ShowTime, Movie, GroupTheater } = require("../../models");

const createShowTime = async (showTime) => {
  return await ShowTime.create({
    ...showTime,
  })
    .then((newShowTime) => {
      return newShowTime;
    })
    .catch((error) => {
      console.log("err", error);
      return error;
    });
};

const getAllShowTime = async (maHeThongRap, maPhim) => {
  if (maHeThongRap) {
    return ShowTime.findAll({
      where: {
        codeGroupTheaterShowTime: maHeThongRap,
      },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  } else {
    return ShowTime.findAll({
      where: {
        codeGroupTheaterShowTime: maPhim,
      },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
};

module.exports = { getAllShowTime, createShowTime };
