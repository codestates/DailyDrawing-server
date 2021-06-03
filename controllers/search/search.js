const { Drawing } = require("../../models");
const { User } = require("../../models");
const { Tag } = require("../../models");
const { DrawingsTag } = require("../../models");

const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const { words } = req.query;

  //태그, 닉네임, 타이틀 검색
  // & 문자열이 있는 경우 닉네임and태그 or 닉네임and타이틀 검색
  let userId = await User.findOne({ where: { nickname: words } });
  userId = userId ? userId.dataValues.id : null;

  let tagId = await Tag.findOne({ where: { tagname: words } });
  tagId = tagId ? tagId.dataValues.id : null;

  if (!userId && !tagId) {
    res.status(400).send({ message: "There is no result for the words" });
  } else {
    let postData1 = null;
    let postData2 = null;
    if (userId) {
      let result = await Drawing.findAll({
        where: { Users_id: userId, isCompleted: true },
      });
      postData1 = result ? result.map(data => data.dataValues) : postData1;
    }
    if (tagId) {
      let postId = await DrawingsTag.findAll({ where: { Tags_id: tagId } });
      postId = postId ? postId.map(data => data.dataValues.Drawings_id) : null;
      if (postId) {
        let result = await Drawing.findAll({
          where: { id: postId, isCompleted: true },
        });
        postData2 = result ? result.map(data => data.dataValues) : postData2;
      }
    }
    const refArr = [postData1, postData2];
    const result = [];
    refArr.forEach(arr => {
      if (arr !== null) {
        result.push(...arr);
      }
    });

    if (result.length > 0) {
      res
        .status(200)
        .send({ postDatas: result, message: "Get the posts successfully" });
    } else {
      res.status(400).send({ message: "There is no result for the words" });
    }
  }
};
