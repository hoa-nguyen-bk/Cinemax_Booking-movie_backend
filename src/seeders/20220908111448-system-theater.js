"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "SystemTheaters",
      [
        {
          id: 1,
          tenHeThongRap: "BHD",
          biDanh: "BHD",
          logo: "tenpack.com.vn/wp-content/uploads/2016/02/BHD-cineplex-logo.png",
          createdAt: "2022-06-12 16:22:22",
          updatedAt: "2022-06-12 16:22:22",
        },
        {
          id: 2,
          tenHeThongRap: "Cinestar",
          biDanh: "CNS",
          logo: "cinestar.com.vn/pictures/400x400.png",
          createdAt: "2022-06-12 16:22:22",
          updatedAt: "2022-06-12 16:22:22",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
