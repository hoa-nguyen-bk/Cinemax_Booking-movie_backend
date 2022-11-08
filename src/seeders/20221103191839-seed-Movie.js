"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Movies",
      [
        {
          id: 1,
          name: "Hồi chuông lạ",
          trailer: "https://www.youtube.com/watch?v=u34gHaRiBIU",
          poster: "https://poster.vietphim.tv/uploads/movies/hoi-chuong-la.jpg",
          description:
            "Hồi Chuông Lạ - From lấy bối cảnh tại một thị trấn u ám, hoang văng ở miền trung nước Mỹ. Khi nơi đây đang xảy một hiện tượng vô cùng kỳ lạ.",
          startTime: "2022-02-04 00:00:00",
          evaluate: 5,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 2,
          name: "John Wick: Chapter 4",
          trailer: "https://www.youtube.com/embed/BMWtLXDkv6Y",
          poster:
            "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-chapter-4_gp01.jpg",
          description:
            "John Wick: Chapter 4 là bộ phim hành động kịch tính neo-noir của Mỹ được đạo diễn bởi Chad Stahelski. Đây là phần hậu truyện của bộ phim Sát thủ John Wick",
          startTime: "2022-02-04 00:00:00",
          evaluate: 5,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 3,
          name: "Spy x Family",
          trailer: "https://youtu.be/rzRUlBcmsDo?t=1",
          poster:
            "http://movie0706.cybersoft.edu.vn/hinhanh/spy-x-family_gp01.jpg",
          description: "Spy x Family Des",
          startTime: "2022-02-04 00:00:00",
          evaluate: 5,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 4,
          name: "NOPE",
          trailer: "https://youtu.be/d-1yppQlMN4",
          poster: "http://movie0706.cybersoft.edu.vn/hinhanh/nope_gp01.png",
          description:
            "Các cư dân của một khe nước cô đơn ở nội địa California chứng kiến ​​một khám phá kỳ lạ và ớn lạnh",
          startTime: "2022-02-04 00:00:00",
          evaluate: 5,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Movie", null, {});
  },
};
