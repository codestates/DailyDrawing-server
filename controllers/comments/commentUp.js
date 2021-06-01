const { Comments } = require("../../models");
const { Drawing } = require("../../models");

module.exports = async (req, res) => {
  const Users_id = res.userId;
  const { Drawings_id, comment } = req.body;

  const checkIdValid = await Drawing.findOne({ where: { id: Drawings_id } });
  if (checkIdValid) {
    try {
      Comments.create({ Users_id, Drawings_id, comment });
      res.status(201).send({ message: "Your comment uploaded successfully" });
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  } else {
    res
      .status(400)
      .send({ message: "Invalid access. please, try again after relogin" });
  }
};
