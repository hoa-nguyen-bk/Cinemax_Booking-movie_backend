"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "GroupTheaters",
      [
        {
          id: 1,
          codeGroupTheater: "BHD Bơ Bao",
          nameGroupTheater: "BHD - Aeon Tân Phú",
          location: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú",
          maHeThongRap: 1,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 2,
          codeGroupTheater: "bhd-star-cineplex-3-2",
          nameGroupTheater: "BHD Star Cineplex - 3/2",
          location: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
          maHeThongRap: 1,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 3,
          codeGroupTheater: "cgv-aeon-binh-tan",
          nameGroupTheater: "CGV - Aeon Bình Tân",
          location:
            "Tầng 3, TTTM Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11",
          maHeThongRap: 2,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 4,
          codeGroupTheater: "cgv-aeon-tan-phu",
          nameGroupTheater: "CGV - Aeon Tân Phú",
          location: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú",
          maHeThongRap: 2,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 5,
          codeGroupTheater: "cns-hai-ba-trung",
          nameGroupTheater: "CNS - Hai Bà Trưng",
          location: "135 Hai Bà Trưng, Bến Nghé, Q.1",
          maHeThongRap: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 6,
          codeGroupTheater: "cns-quoc-thanh",
          nameGroupTheater: "CNS - Quốc Thanh",
          location: "271 Nguyễn Trãi, Q.1",
          maHeThongRap: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("GroupTheater", null, {});
  },
};
