'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users',[
     {"firstName": "Hòa seeder",
     "lastName": "Nguyễn",
     "email": "hoa@ncc.asia",
     "password": "12345678",
     "birthday": new Date(),
     "phoneNumber": "09090909090",
    "password": "12345678",
    "createdAt":new Date(),
    "updatedAt": new Date()
  }
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', {"firstName": "Hòa seeder"}, {});

  }
};
