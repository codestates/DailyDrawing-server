const { Comments } = require("../../models");

module.exports = async (req, res) => {
  const Drawings_id = req.params.id;

  let commentsInfo = await Comments.findAll({ where: { Drawings_id } });

  if (commentsInfo.length > 0) {
    const comments = commentsInfo.map(data => data.dataValues);

    res
      .status(200)
      .send({ comments, message: "Get comments from the post successfully" });
  } else {
    res.status(400).send({ message: "The post has no comment" });
  }
};
