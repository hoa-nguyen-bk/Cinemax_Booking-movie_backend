"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "ShowTimes",
      [
        {
          id: 1,
          codeGroupTheaterShowTime: 1,
          codeMovieShowTime: 1,
          datetime: "2022-02-04 00:00:00",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 2,
          codeGroupTheaterShowTime: 1,
          codeMovieShowTime: 2,
          datetime: "2022-02-04 00:00:00",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 3,
          codeGroupTheaterShowTime: 1,
          codeMovieShowTime: 3,
          datetime: "2022-02-04 00:00:00",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 4,
          codeGroupTheaterShowTime: 2,
          codeMovieShowTime: 4,
          datetime: "2022-02-04 00:00:00",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 5,
          codeGroupTheaterShowTime: 2,
          codeMovieShowTime: 3,
          datetime: "2022-02-04 00:00:00",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 6,
          codeGroupTheaterShowTime: 2,
          codeMovieShowTime: 4,
          datetime: "2022-02-04 00:00:00",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 7,
          codeGroupTheaterShowTime: 3,
          codeMovieShowTime: 2,
          datetime: "2022-02-04 00:00:00",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 8,
          codeGroupTheaterShowTime: 3,
          codeMovieShowTime: 2,
          datetime: "2022-02-04 00:00:00",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 9,
          codeGroupTheaterShowTime: 4,
          codeMovieShowTime: 1,
          datetime: "2022-02-04 00:00:00",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ShowTime", null, {});
  },
};
