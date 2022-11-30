"use strict";

const express = require("express");
const { authenticate } = require("../../middleware");
const { createTicket, getListTicket } = require("../../services/tickets");
const ticketRouter = express.Router();
const routerDefault = "/";
ticketRouter.get('/',async(req,res) => {
  const ticket = await getListTicket()
  console.log({ticket});
  return req.send("ok")
})

ticketRouter.post('/ticket/:movieId',[authenticate],async(req,res) => {
  const {movieId} = req?.params;
  const {user} = req;
  const ticket = await createTicket()
  return req.send("ok")
})
module.exports=ticketRouter