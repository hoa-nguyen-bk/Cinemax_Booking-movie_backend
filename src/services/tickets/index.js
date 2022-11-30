const {Ticket} = require('../../models');
const express = require("express");

const getListTicket = async (userId, movieId) => {
  return await Ticket.findAll()
  .then((res) => res)
  .catch((err) => {
    console.log(err);
    return null;
  });
}

const createTicket = async (userId, movieId) => {
  try {
   
  } catch (error) {
    
  }
}
module.exports={
  createTicket,
  getListTicket
}