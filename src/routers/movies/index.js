"use strict";
const express = require("express");
const { authenticate } = require("../../middleware");
const { decodeToken } = require("../../services/auth");
const {
  getAllMovies,
  createMovie,
  checkNullId,
  deleteMovieById,
  getDetailMovie,
  updateMoviebyId,
} = require("./../../services/movies");

const movieRouter = express.Router();

const routerDefault = "/";

movieRouter.get(routerDefault, async (req, res) => {
  const movies = await getAllMovies();
  if (!movies) {
    res.status(500).send("Cannot get movie list");
  }
  res.send(movies);
});

movieRouter.post(routerDefault, async (req, res) => {
  const { name, trailer, poster, description, startTime, evaluate } = req?.body;

  if (!name || !name.trim() || !trailer) {
    return await res.status(400).send("error: must field name and trailer");
  }
  return await createMovie({
    name,
    trailer,
    poster,
    description,
    startTime,
    evaluate,
  })
    .then((result) => {
      return res.status(201).send(result);
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
});

//update movie
movieRouter.put(`/:id`, async (req, res) => {
  const { name, trailer, poster, description, startTime, evaluate } = req?.body;
  const { id = "" } = req?.params;
  const isExistMovie = await checkNullId(id);
  if (!isExistMovie) {
    return res.status(404).send(`Movie ${id} is not exist`);
  }
  if (!name || !name.trim() || !trailer) {
    return await res.status(400).send("error: must field name and trailer");
  }
  await updateMoviebyId(id, {
    name,
    trailer,
    poster,
    description,
    startTime,
    evaluate,
  });
  res.status(201).send(result);
});

//delete
movieRouter.delete(`${routerDefault}:id`, authenticate, async (req, res) => {
  const { id } = req.params;
  const isExistMovie = await checkNullId(id);
  // check user is exist by id
  if (!isExistMovie) {
    return res.status(404).send(`Movie ${id} is not exist`);
  }
  const movieDeleted = await deleteMovieById(id);
  if (!movieDeleted) {
    return res.status(500).send(`Movie ${id} cannot delete`);
  }
  return res.status(201).send(`Delete movie ${id} success`);
});

//lấy detail
movieRouter.get(`${routerDefault}:id`, async (req, res) => {
  const { id } = req.params;
  const movieDetail = await getDetailMovie(id);
  if (!movieDetail) {
    return res.status(500).send(`Movie ${id} is not exist`);
  }
  return res.status(201).send(movieDetail);
});

module.exports = movieRouter;
