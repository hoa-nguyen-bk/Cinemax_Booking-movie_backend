"use strict";

const express = require("express");

const groupTheaterRouter = express.Router();

const {
  createGroupTheater,
  getAllGrouptheater,
} = require("../../services/groupTheater");

groupTheaterRouter.get("/", async (req, res) => {
  const { maHeThongRap } = req.query;
  const groupTheater = await getAllGrouptheater(maHeThongRap);
  if (!groupTheater) {
    res.status(500).send("Cannot get movie list");
  }
  res.send(groupTheater);
});

groupTheaterRouter.post("/create-group-theater", async (req, res) => {
  const { codeGroupTheater, nameGroupTheater, location, maHeThongRap } =
    req?.body;

  return await createGroupTheater({
    codeGroupTheater,
    nameGroupTheater,
    location,
    maHeThongRap,
  })
    .then((response) => {
      const result = { ...response };
      delete result.password;
      return res.status(201).send(response);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

module.exports = groupTheaterRouter;
