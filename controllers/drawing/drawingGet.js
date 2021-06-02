const { Drawing } = require("../../models");

module.exports = async (req, res) => {
  const id = req.params.id;

  if (id === "getall") {
    try {
      let postDatas = await Drawing.findAll();
      if (postDatas) {
        postDatas = postDatas.map(data => data.dataValues);
        res.status(200).send({
          postDatas,
          message: "Get all the posts successfully",
        });
      } else {
        res.status(400).send({ message: `No post uploded` });
      }
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  } else {
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
  }
};
