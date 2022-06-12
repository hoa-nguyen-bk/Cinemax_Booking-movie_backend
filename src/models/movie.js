'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Ticket}) {
      // define association here
      this.hasMany(Ticket, {
        foreignKey: 'movie',
        // as: 'movie'
      })
    }
  }

  Movie.init({
    name: DataTypes.STRING,
    trailer: DataTypes.STRING,
    poster: DataTypes.STRING,
    description: DataTypes.STRING,
    startTime: DataTypes.DATE,
    evaluate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};