"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Tags", [
      {
        tagname: "서양화",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tagname: "동양화",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tagname: "아크릴화",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tagname: "수채화",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tagname: "유화",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tagname: "인물화",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tagname: "풍경화",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tagname: "일러스트",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tagname: "추상화",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tagname: "정물화",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tagname: "남자",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tagname: "여자",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tagname: "입시",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tagname: "소묘",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tagname: "만화",
        color: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Tags", null, {});
  },
};
