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
    return queryInterface.bulkInsert("Users", [
      {
        email: "minjehyun@naver.com",
        nickname: "jehyun",
        password: 1234,
        profileImg: "profileImg10.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "jekyung.newton@gmail.com",
        nickname: "jekyung",
        password: 1234,
        profileImg: "profileImg11.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "hammin330@knou.ac.kr",
        nickname: "hammin330",
        password: 1234,
        profileImg: "profileImg08.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "hjbaek91@gmail.com",
        nickname: "hjbaek91",
        password: 1234,
        profileImg: "profileImg09.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "jinhee10@gmail.com",
        nickname: "jinhee10",
        password: 1234,
        profileImg: "profileImg04.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "esle2719@gmail.com",
        nickname: "esle2719",
        password: 1234,
        profileImg: "profileImg03.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "secillia@gmail.com",
        nickname: "secillia",
        password: 1234,
        profileImg: "profileImg05.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "najacka@gmail.com",
        nickname: "najacka",
        password: 1234,
        profileImg: "profileImg01.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "bee771@gmail.com",
        nickname: "bee771",
        password: 1234,
        profileImg: "profileImg02.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "judante@gmail.com",
        nickname: "judante",
        password: 1234,
        profileImg: "profileImg07.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "simsurung@gmail.com",
        nickname: "simsurung",
        password: 1234,
        profileImg: "profileImg06.jpeg",
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
    return queryInterface.bulkDelete("Users", null, {});
  },
};
