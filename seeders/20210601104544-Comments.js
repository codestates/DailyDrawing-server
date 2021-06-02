"use strict";

const drawingIds = [...Array(56)].map((cur, idx) => idx + 1);
const randomUser = [...Array(11)].map((cur, idx) => idx + 1);
const randomComment = [
  "우와 그림이 너무 멋저요!!",
  "어떤식으로 그렸는지 여쭤봐도 될까요??",
  "혹시 툴은 어떤걸 쓰시나요?",
  "와 금손...부럽습니다!",
  "혹시 전공이신가요? ",
  "멋져요",
  "아름답습니다.",
  "혹시 클립스튜디오 쓰시나요??",
  "제가 비전공이라 걱정이 많았는데 이 그림보고 걱정 덜고 갑니다^^",
  "님 그림 왜이럼?",
  "주로 이런 화풍으로 자주 그리시나요? 궁금합니다.",
  "제 손이랑 바꾸시죠.",
  "비전공이 이 길을 고집해도 될까요?",
  "좋네요!",
  "이정도 그리려면 얼마나 그려야 될까요?",
  "와 이정도면 영상만들어서 유튜브에 올려도 대박날 것 같음...",
  "작업시간 총 몇시간 걸리셨어요?",
  "나쁘지 않은 듯",
  "와우! 감탄하고 갑니다.",
  "아...배아파...",
  "진짜 님이 그리신거 맞음?",
  "금손정도는 아니고 한 은손은 될 듯",
  "좋습니다.",
  "와우",
  "!!!!!",
  "이정도는 뭐...",
  "와...",
  "저는 언제즘 이런 그림을ㅠ",
  "이정도는 나도 그림 ㅇㅈ?",
  "지금 그리러 갑니다.",
  "작가님 손목 괜찮으세요?",
  "많이 배우셔야 될 듯",
  "개안했습니다.",
  "이 그림보고 제 그림보니 왠 낙서가...",
  "그림은 언제부터 그리신건가요??",
  "괜찮네요.",
  "감사합니다.",
  "작가님 리플좀ㅠ",
  "색감이 되게 다양하네요. 혹시 주로 쓰시는 색감이 따로 있으신가요?",
  "색상 선택이 흥미롭네요. 잘 구경하고 갑니다.",
  "구경 잘하고 갑니다.",
  "언젠가 내 그림도!!",
];

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

//드로윙 id마다 3~8개만큼의 댓글을 랜덤으로 등록
const temp = drawingIds.map(cur =>
  [...Array(getRandomInt(3, 8))].map(el => ({
    Users_id: randomUser[getRandomInt(0, randomUser.length)],
    Drawings_id: cur,
    comment: randomComment[getRandomInt(0, randomComment.length)],
    createdAt: new Date(),
    updatedAt: new Date(),
  }))
);

const commentDatas = [];
temp.forEach(cur => commentDatas.push(...cur));

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
    return queryInterface.bulkInsert("Comments", commentDatas);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
