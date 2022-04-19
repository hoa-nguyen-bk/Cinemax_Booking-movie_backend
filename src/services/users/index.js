'use strict';
const {Avatar,User,Movie} = require("../../../models");
const {Op} = require("sequelize");

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
      include: [
        {
          model: Avatar,
          as: 'avatar',
          // where: {
          //   isActive: true
          // }
        },
        {
          model: Avatar,
          as: 'avatars',
        },
      ]
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

const storageAvatar = async (userId, url) => {
  try {
    const avatar = await Avatar.create({url, userId, isActive: true});
    await Avatar.update({isActive:false},{where:{
      userId,
      id:{
        //nghĩa là loại trừ avatar id đó ra thôi
        //theo script thì sẽ là 
        //where userId = 3 AND id not is 7
        [Op.not]: avatar?.id
      }
    }})
    return avatar
  } catch (error) {
    console.log(error, "storeAvatar");
    return null
  }
}

const getMovieHistoryByUser = async (userId) => {
  return await User.findOne({
    where:{
      id: userId,
      // ['movies.id']: {
      //   [Op.not]: 1
      // }
    },
    // include: [
    //   {model : Movie, as: 'movies', where:{
    //     [Op.not]: 1
    //   }},
    //   {model : Movie, as: 'movies'}
    // ]
  })
  .then((res) => res)
  .catch((err) => {
    console.log(err);
    return null;
  });
}

module.exports={
  createUser,
  getUserByEmail,
  getUserById,
  storageAvatar,
  getMovieHistoryByUser,
}