"use strict";
const { Movie } = require("../../models");

const getAllMovies = async () => {
  return await Movie.findAll()
    .then((res) => res)
    .catch((err) => {
      console.log(err);
      return null;
    });
};

const createMovie = async (movies) => {
  return await Movie.create(movies).catch((error) => {
    console.log(error);
    return null;
  });
};

const updateMoviebyId = async (id, movies) => {
  try {
    const movie = await Movie.update(movies,{
      where: {
        id,
      },
    })  
    return movie;
  } catch (error) {
    return null;
  }
};

const checkNullId = async (id) => {
  try {
    const movie = await Movie.findOne({
      where: {
        id,
      },
    });
    if (!movie) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

const deleteMovieById = async (id) => {
  try {
    const movie = await Movie.destroy({
      where: {
        id,
      },
    });

    return movie;
  } catch (error) {
    console.log(error, "er del");
    return null;
  }
};

const getDetailMovie = async (id) => {
  try {
    const movie = await Movie.findOne({
      where: {
        id,
      },
    });

    return movie;
  } catch (error) {
    console.log(error, "er del");
    return null;
  }
};

module.exports = {
  getAllMovies,
  getDetailMovie,
  deleteMovieById,
  checkNullId,
  updateMoviebyId,
  createMovie,
};
