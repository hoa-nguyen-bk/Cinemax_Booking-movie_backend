"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SystemTheater extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ GroupTheater }) {
      this.hasMany(GroupTheater, {
        foreignKey: "maHeThongRap",
        as: "heThongRap",
      });
      // define association here
    }
  }
  SystemTheater.init(
    {
      tenHeThongRap: DataTypes.STRING,
      biDanh: DataTypes.STRING,
      logo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SystemTheater",
    }
  );
  return SystemTheater;
};
