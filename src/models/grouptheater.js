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
      //lien ket với seat và show time
      this.hasMany(models.ShowTime, {
        foreignKey: "codeGroupTheaterShowTime",
        as: "showTime",
      });
      this.hasMany(models.Seat, {
        foreignKey: "codeGroupTheaterSeat",
        as: "seat",
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
