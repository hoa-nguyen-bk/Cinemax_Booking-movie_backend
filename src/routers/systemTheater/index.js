"use strict";

const express = require("express");

const systemTheaterRouter = express.Router();

const {
  createSystemTheater,
  getAllSystemtheater,
} = require("../../services/systemTheater");

systemTheaterRouter.get("/", async (req, res) => {
  const { maHeThongRap } = req.query;
  const systemTheater = await getAllSystemtheater(maHeThongRap);
  if (!systemTheater) {
    res.status(500).send("Cannot get movie list");
  }
  res.send(systemTheater);
});

systemTheaterRouter.post("/create-system-theater", async (req, res) => {
  const { tenHeThongRap, biDanh, logo } = req?.body;

  return await createSystemTheater({ tenHeThongRap, biDanh, logo })
    .then((response) => {
      if (!response.password) {
        return res.status(500).send(response);
      }
      const result = { ...response };
      delete result.password;
      return res.status(201).send(response);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

module.exports = systemTheaterRouter;
