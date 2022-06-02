import  Models  from "../../models";
const {Movie} = Models.default;
const getAllMovies = async () => {
  return await Movie.findAll()
    .then((res: any) => res)
    .catch((err: any) => {
      console.log(err);
      return null;
    });
  // try {
  //   return Movie.findAll();
  // } catch (error) {
  //   console.log(error);
  //   return null;
  // }
};

const createMovie = async (movies: any) => {
  return await Movie.create(movies).catch((error: any) => {
    console.log(error);
    return null;
  });
};

const updateMoviebyId = async (id: any, movies: any) => {
  try {
    const movie = Movie.update(movies,{
      where: {
        id,
      },
    })  
    return movie;
  } catch (error) {
    return null;
  }
};

const checkNullId = async (id: any) => {
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

const deleteMovieById = async (id: any) => {
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

const getDetailMovie = async (id: any) => {
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

export {
  getAllMovies,
  getDetailMovie,
  deleteMovieById,
  checkNullId,
  updateMoviebyId,
  createMovie,
};
