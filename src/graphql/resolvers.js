const { scriptPassword } = require("../services/auth");
const { getUserById, createUser } = require("../services/users");
const {User, Avatar} = require("./../models");
const graphqlResolves = {
  async getAllUser() {
    try {
      const userList = await User.findAll({
        include: [
          {
            model: Avatar,
            as: 'avatar',
            // where: {
            //   isActive: false
            // }
          },
          {
            model: Avatar,
            as: 'avatars',
          },
        ]
      });
      console.log(userList,"userList");
      return userList;
    } catch (error) {
      throw new Error(error);
    }
  },
  async getUserById(params){
    const id = params?.id
    try {
      const user = await User.findByPk(id);
      if(!user){
        throw new Error('User ko tồn tại')
      }
      return user
    } catch (error) {
      throw new Error(error)
    }
  },
  async createUser({userInput}){
    const {
      firstName,
      lastName,
      email,
      birthday,
      phoneNumber,
      password
    } = userInput;
    try {
      const response = await createUser({
        firstName,
        lastName,
        email,
        birthday,
        password: scriptPassword(password),
        phoneNumber,
        role: 'user'
      })
      if(!response){
        throw new Error("cant create user")
      }

      const result = { ...response };
      delete result.password;
      return response;
    } catch (error) {
      throw new Error("cant create user")
    }
  },
  async updateUser({userInput,id:userId}){
    const {
      firstName,
      lastName,
      email,
      birthday,
      phoneNumber,
      password
    } = userInput;
    try {
      const user = await getUserById(userId)
      if(!user){
        throw new Error(`user id ${userId} is not exist`)
      }
      
      
      try {
        const response = await createUser({
          firstName,
          lastName,
          email,
          birthday,
          password: password? scriptPassword(password): undefined,
          phoneNumber,
        })

        if(!response){
          throw new Error("cant create user")
        }

        const result = { ...response };
        delete result.password;
        return response;
      } catch (error) {
        throw new Error("cant create user")
      }
    } catch (error) {
        
    }
  }
};
module.exports = {
  graphqlResolves
}