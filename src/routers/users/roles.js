
const express = require("express");
const { authenticate } = require("../../middleware");
const { getListRole } = require("../../services/users/roles");
const roleRouter = express.Router();

roleRouter.get("/",[authenticate],async (req,res)=>{
  const roles = await getListRole();
  if(!roles){
    return res.status(500).send("Cannot get roles");
  }
  return res.send(roles)
})
module.exports = roleRouter