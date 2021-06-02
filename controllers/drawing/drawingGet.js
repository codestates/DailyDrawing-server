const { Drawing } = require("../../models");

module.exports = async (req, res) => {
  const id = req.params.id;

  try {
    let postInfo = await Drawing.findOne({ where: { id } });
    if (postInfo) {
      postInfo = postInfo.dataValues;
      res.status(200).send({
        postInfo,
        message: "Get the post successfully",
      });
    } else {
      res.status(400).send({ message: `The post is no exist` });
    }
  } catch (err) {
    res.status(500).send({ message: `${err.message}` });
  }
};
