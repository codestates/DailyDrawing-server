const { Comments } = require("../../models");

module.exports = async (req, res) => {
  const Users_id = res.userId;
  const { id } = req.body;

  let commentInfo = await Comments.findOne({ where: { Users_id, id } });

  commentInfo = commentInfo ? commentInfo.dataValues : null;
  if (commentInfo) {
    try {
      const { comment } = req.body;

      await Comments.update(
        { ...commentInfo, comment, updatedAt: Date.now() },
        { where: { id } }
      );
      res.status(200).send({ message: "Your comment updated successfully" });
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  } else {
    res.status(400).send({
      message: "Invalid access. please, check your account and post again",
    });
  }
};
