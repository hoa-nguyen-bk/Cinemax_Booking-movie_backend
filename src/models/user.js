'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    toJSON() {
      let attribute = Object.assign({},this.get());
      delete attribute.password;
      return attribute;
    }
    static associate({Avatar,Movie,Ticket,Role}) {
      // define association here
      this.hasMany(Avatar,{
        foreignKey: "userId",
        as:'avatars',
      
      });
      this.hasOne(Avatar,{
        foreignKey: "userId",
        as:'avatar',
      });
      this.belongsTo(Role,{
        foreignKey: "roleId",
        as:'role',
      });

      
      this.belongsToMany(Movie,{
        through: Ticket,
        as:'movies'
      })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATE,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};