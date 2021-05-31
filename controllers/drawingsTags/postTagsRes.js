const { DrawingsTag } = require("../../models");
const { Tag } = require("../../models");
//Tags_id, Drawings_id, newTags
module.exports = async (req, res) => {
  const { Tags_id, Drawings_id, newTag } = req.body;

  const tagsArr = Tags_id.split(",");
  const bulkData = tagsArr.map(cur => {
    return { Tags_id: cur, Drawings_id };
  });
  let checkTagInTable = await Tag.findOne({ where: { tagname: newTag } });

  checkTagInTable = checkTagInTable ? checkTagInTable.dataValues.id : null;
  if (checkTagInTable) {
    bulkData.push({ Tags_id: checkTagInTable, Drawings_id });
    try {
      await DrawingsTag.bulkCreate(bulkData);
      res
        .status(200)
        .send({ message: "Your postTags are uploaded suceessfully" });
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  } else {
    try {
      if (newTag) {
        const tagAdded = await Tag.create({ tagname: newTag });
        const newTagId = tagAdded.dataValues.id;
        bulkData.push({ Tags_id: newTagId, Drawings_id });
      }

      await DrawingsTag.bulkCreate(bulkData);
      res
        .status(200)
        .send({ message: "Your postTags are uploaded suceessfully" });
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  }
};
