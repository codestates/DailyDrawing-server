const { Comments } = require("../../models");
const { User } = require("../../models");

module.exports = async (req, res) => {
  const Drawings_id = req.params.id;

  let commentsInfo = await Comments.findAll({ where: { Drawings_id } });

  if (commentsInfo.length > 0) {
    let comments = commentsInfo.map(data => data.dataValues);
    comments = await Promise.all(
      comments.map(async comment => {
        let nick = null;
        try {
          const nickname = await User.findOne({
            where: { id: comment.Users_id },
          });
          nick = nickname.dataValues.nickname;
          const obj = { nickname: nick, comment: comment.comment };
          return obj;
        } catch (err) {
          res.status(500).send({ message: `${err.message}` });
        }
      })
    );
    res.status(200).send({
      comments,
      message: "Get comments from the post successfully",
    });
  } else {
    res.status(400).send({ message: "The post has no comment" });
  }
};
