"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          id: 1,
          type: "user",
          description: "customer",
          createdAt: "2022-06-12 16:22:22",
          updatedAt: new Date(),
        },
        {
          id: 2,
          type: "admin",
          description: "administrator",
          createdAt: "2022-06-12 16:22:22",
          updatedAt: new Date(),
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
