"use strict";
const express = require("express");

const showTimeRouter = express.Router();
const { ShowTime, Movie, GroupTheater } = require("../../models");
const { getAllShowTime, createShowTime } = require("../../services/showTime");

showTimeRouter.get("/", async (req, res) => {
  const listMovie = await Movie.findAll().then((res) => {
    return res;
  });
  const listGroupTheater = await GroupTheater.findAll().then((res) => {
    return res;
  });
  let formatData = [];
  const { maHeThongRap, maPhim } = req.query;
  const showTime = await getAllShowTime(maHeThongRap, maPhim);
  if (!showTime) {
    res.status(500).send("Cannot get show time list");
  } else {
    showTime?.map((item) => {
      const nameGroupTheater = listGroupTheater?.find(
        (itemGroup) => item?.codeGroupTheaterShowTime == itemGroup?.id
      )?.nameGroupTheater;
      const nameMovie = listMovie?.find(
        (itemMovie) => item?.codeMovieShowTime == itemMovie?.id
      )?.name;
      formatData?.push({ ...item?.dataValues, nameGroupTheater, nameMovie });
    });
  }
  res.send(formatData);
});

showTimeRouter.post("/create-show-time", async (req, res) => {
  const { codeGroupTheaterShowTime, codeMovieShowTime, datetime } = req?.body;

  return await createShowTime({
    codeGroupTheaterShowTime,
    codeMovieShowTime,
    datetime,
  })
    .then((response) => {
      return res.status(201).send(response);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

module.exports = showTimeRouter;
