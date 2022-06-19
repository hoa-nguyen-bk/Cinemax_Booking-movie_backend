"use strict";

const express = require("express");

const systemTheaterRouter = express.Router();

const { createSystemTheater } = require("../../services/systemTheater");

systemTheaterRouter.get("/", async (req, res) => {
  res.send("hello word movie");
});

systemTheaterRouter.post("/create-system-theater", async (req, res) => {
  const { tenHeThongRap, biDanh, logo } = req?.body;
  // if (!email || !email.trim() || !password || !password.trim()) {
  //   return await res.status(400).send("error: must field email or pass");
  // }
  console.log("tenHeThongRap, biDanh, logo", tenHeThongRap, biDanh, logo);
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
