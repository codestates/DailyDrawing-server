const { Drawing } = require("../../models");

module.exports = async (req, res) => {
  // console.log(req.file);
  // console.log(req.body);
  // console.log(res.userId);
  const DrawingImg = req.file.filename;
  const Users_id = res.userId;
  const { title, description, isCompleted } = req.body;
  try {
    await Drawing.create({
      title,
      DrawingImg,
      description,
      isCompleted,
      Users_id,
    });
    res.status(200).send({ message: "Drawing post uploaded successful" });
  } catch (err) {
    res.status(500).send({ message: `${err.message}` });
  }
};
