const { DrawingsTag } = require("../../models");
const { Drawing } = require("../../models");

module.exports = async (req, res) => {
  const Users_id = res.userId;
  const { Drawings_id } = req.body;

  const checkValid = await Drawing.findOne({
    where: { Users_id, id: Drawings_id },
  });

  if (checkValid) {
    try {
      await DrawingsTag.destroy({ where: { Drawings_id } });
      res
        .status(200)
        .send({ message: "Your postTags are deleted suceessfully" });
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  } else {
    res.status(400).send({ message: "You have no right to delete this post" });
  }
};
