const { Tag } = require("../../models");

module.exports = async (req, res) => {
  const { tagname, color } = req.body;
  const tagArr = tagname.split(",");
  const colorArr = color.split(",");

  const tagDatas = tagArr.map((cur, idx) => {
    const color = colorArr[idx] ? colorArr[idx] : null;
    return { tagname: cur, color };
  });

  try {
    await Tag.bulkCreate(tagDatas);
    res.status(200).send({ message: "Your tag is uploaded suceessfully" });
  } catch (err) {
    res
      .status(409)
      .send({
        message: `${err.message}. Already Added tag. please, check again`,
      });
  }
};
