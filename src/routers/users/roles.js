const express = require("express");
const { authenticate } = require("../../middleware");
const { getListRole, checkRoleExist, getListUserByRole } = require("../../services/users/roles");
const roleRouter = express.Router();

roleRouter.get("/", [authenticate], async (req, res) => {
  const roles = await getListRole();
  if (!roles) {
    return res.status(500).send("Cannot get roles");
  }
  return res.send(roles);
});
roleRouter.get("/list-user", async (req, res) => {
  const { type } = req?.query;
  if (!type){
    return res.status(400).send("Type is required");
  }
  const isTypeExist = await checkRoleExist(type);
  console.log({isTypeExist});
  if(!isTypeExist){
    return res.status(401).send("Type is not exist");
  }
  const typeId = isTypeExist?.id
  console.log({typeId});
  return await getListUserByRole(typeId).then(result => {
    return res.status(200).send(result)
  }).catch(err => {
    return res.status(500).send(err)
  })

});
module.exports = roleRouter;
