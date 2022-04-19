const User = require("./../../models");
const graphqlResolves = {
  async getAllUser() {
    try {
      const userList = await User.findAll();
      return userList;
    } catch (error) {
      throw new Error(error);
    }
  },
};
module.exports = {
  graphqlResolves
}