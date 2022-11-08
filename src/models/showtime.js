"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ShowTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.GroupTheater, {
        foreignKey: "codeGroupTheaterShowTime",
      });
      this.belongsTo(models.Movie, {
        foreignKey: "codeMovieShowTime",
      });
    }
  }
  ShowTime.init(
    {
      datetime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ShowTime",
    }
  );
  return ShowTime;
};
