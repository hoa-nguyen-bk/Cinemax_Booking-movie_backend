'use strict';
const {User} = require("../../../models");

const createUser = async (user) => {
  try {
    const newUser = await User.create(user)
    return newUser
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getUserByEmail = async (email) => {
  try {
    //sẽ lụm thằng đầu tiên theo index
    const user = await User.findOne({
      where: {
        email,
      },
    })
    return user
    
  } catch (error) {
    return console.log(error,"err");
  }
}


const getUserById = async (id) => {
  try {
    //sẽ lụm thằng đầu tiên theo index
    const user = await User.findOne({
      where: {
        id,
      },
    })
    return user
    
  } catch (error) {
    return console.log(error,"err nè");
  }
}

module.exports={
  createUser,
  getUserByEmail,
  getUserById,
}