const { Like } = require("../../models");
//UserId, DrawingId 필요
module.exports = async (req, res) => {
  const Users_id = res.userId;
  const Drawings_id = req.body.id;

  const LikeInfo = await Like.findOne({ where: { Users_id, Drawings_id } });

  if (LikeInfo) {
    res.status(409).send({ message: "You had already marked" });
  } else {
    try {
      await Like.create({ Users_id, Drawings_id });
      res.status(201).send({ message: "LikeUp was marked successful" });
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  }
};
