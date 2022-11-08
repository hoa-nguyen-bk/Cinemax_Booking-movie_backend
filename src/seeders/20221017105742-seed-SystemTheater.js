"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "SystemTheaters",
      [
        {
          id: 1,
          tenHeThongRap: "BHD",
          biDanh: "BHD",
          logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd.png",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 2,
          tenHeThongRap: "CGV",
          biDanh: "CGV",
          logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 3,
          tenHeThongRap: "CineStar",
          biDanh: "CineStar",
          logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("SystemTheater", null, {});
  },
};
