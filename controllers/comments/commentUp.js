const { Comments } = require("../../models");

module.exports = async (req, res) => {
  const Users_id = res.userId;
  const { Drawings_id, comment } = req.body;

  try {
    Comments.create({ Users_id, Drawings_id, comment });
    res.status(201).send({ message: "Your comment uploaded successfully" });
  } catch (err) {
    res.status(500).send({ message: `${err.message}` });
  }
};
