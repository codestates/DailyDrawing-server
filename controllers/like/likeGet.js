const { Like } = require("../../models");

module.exports = async (req, res) => {
  const Users_id = res.userId;
  try {
    let myLikes = await Like.findAll({ where: { Users_id } });
    myLikes = myLikes.map(like => like.dataValues);
    res.status(200).send({ myLikes, message: "Get Like successful" });
  } catch (err) {
    res.status(500).send({ message: `${err.message}` });
  }
};
