const { DrawingsTag } = require("../../models");
const { Tag } = require("../../models");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const Drawings_id = req.params.id;

  const postTagIds = await DrawingsTag.findAll({ where: { Drawings_id } });
  if (postTagIds) {
    const tagDatas = postTagIds.map(data => {
      const { Tags_id } = data.dataValues;
      return Tags_id;
    });
    try {
      const tagnames = await Tag.findAll({
        where: { id: { [Op.or]: tagDatas } },
      });

      const postTags = tagnames.map(tag => {
        const { tagname } = tag.dataValues;
        return tagname;
      });
      res
        .status(200)
        .send({ postTags, message: "Get tagnames from the post successfully" });
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  } else {
    res.status(400).send({ message: "The post has no tag" });
  }
};
