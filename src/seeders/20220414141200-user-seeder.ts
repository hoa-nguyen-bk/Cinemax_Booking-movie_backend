

export default {
  async up (queryInterface: { bulkInsert: (arg0: string, arg1: { firstName: string; lastName: string; email: string; password: string; birthday: Date; phoneNumber: string; createdAt: Date; updatedAt: Date; }[], arg2: {}) => any; }, Sequelize: any) {
    
   await queryInterface.bulkInsert('Users',[
     {"firstName": "Hòa seeder",
     "lastName": "Nguyễn",
     "email": "hoa@ncc.asia",
     "password": "12345678",
     "birthday": new Date(),
     "phoneNumber": "09090909090",
    "createdAt":new Date(),
    "updatedAt": new Date()
  }
   ],{})
  },

  async down (queryInterface: { bulkDelete: (arg0: string, arg1: { firstName: string; }, arg2: {}) => any; }, Sequelize: any) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', {"firstName": "Hòa seeder"}, {});

  }
};
