"use strict";

const express = require("express");
const { authenticate } = require("../../middleware");
const { createTicket } = require("../../services/tickets");
const ticketRouter = express.Router();
ticketRouter.post('/ticket/:movieId',[authenticate],async(req,res) => {
  const {movieId} = req?.params;
  const {user} = req;
  const ticket = await createTicket()
  return req.send("ok")
})
module.exports=ticketRouter