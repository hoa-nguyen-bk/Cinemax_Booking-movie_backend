"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GroupTheater extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.SystemTheater, {
        foreignKey: "maHeThongRap",
        as: "heThongRap",
      });
      this.hasMany(models.ShowTime, {
        foreignKey: "codeGroupTheater",
        as: "GroupTheater",
      });
    }
  }
  GroupTheater.init(
    {
      codeGroupTheater: DataTypes.STRING,
      nameGroupTheater: DataTypes.STRING,
      location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "GroupTheater",
    }
  );
  return GroupTheater;
};
