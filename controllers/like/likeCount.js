const { Like } = require("../../models");

module.exports = async (req, res) => {
  const Drawings_id = req.params.id;
  try {
    const likeCountNumber = await Like.count({ where: { Drawings_id } });
    res.status(200).send({ likeCountNumber, message: "Count Like successful" });
  } catch (err) {
    res.status(500).send({ message: `${err.message}` });
  }
};
