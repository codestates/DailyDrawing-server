const { Drawing } = require("../../models");
const { Comments } = require("../../models");
const { DrawingsTag } = require("../../models");
const fs = require("fs");

module.exports = async (req, res) => {
  const Users_id = res.userId;
  const { id } = req.body;

  let drawingPost = await Drawing.findOne({ where: { Users_id, id } });

  if (drawingPost) {
    try {
      const { DrawingImg } = drawingPost.dataValues;
      await Comments.destroy({ where: { Drawings_id: id } });
      await DrawingsTag.destroy({ where: { Drawings_id: id } });
      await drawingPost.destroy();
      fs.unlink(`./uploads/images/${DrawingImg}`, err => {
        if (err) res.status(400).send({ messsage: `${err}` });
      });

      res.status(200).send({ message: "Drawing post deleted successful" });
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  } else {
    res.status(400).send({
      message: "Invalid access. please, check your account and post again",
    });
  }
};
