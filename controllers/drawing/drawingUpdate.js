const { Drawing } = require("../../models");
//userid, drawingid필요
module.exports = async (req, res) => {
  const Users_id = res.userId;
  const { id } = req.body;
  let drawingPost = await Drawing.findOne({ where: { Users_id, id } });

  drawingPost = drawingPost ? drawingPost.dataValues : null;
  if (drawingPost) {
    try {
      const DrawingImg = req.file.filename;
      const { title, description, isCompleted } = req.body;
      await Drawing.update(
        {
          title,
          DrawingImg,
          description,
          isCompleted,
          updatedAt: Date.now(),
          createdAt: drawingPost.createdAt,
        },
        { where: { id } }
      );
      res.status(200).send({ message: "Drawing post updated successful" });
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  } else {
    res.status(400).send({
      message: "Invalid access. please, check your account and post again",
    });
  }
};
