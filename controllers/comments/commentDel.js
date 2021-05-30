const { Comments } = require("../../models");

module.exports = async (req, res) => {
  const Users_id = res.userId;
  const { id } = req.body;

  const commentInfo = await Comments.findOne({ where: { Users_id, id } });
  if (commentInfo) {
    try {
      commentInfo.destroy();
      res.status(200).send({ message: "Your comment deleted successfully" });
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  } else {
    res.status(400).send({
      message: "Invalid access. please, check your account and post again",
    });
  }
};
