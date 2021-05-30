const { Like } = require("../../models");

module.exports = async (req, res) => {
  const Users_id = res.userId;
  const Drawings_id = req.body.id;

  let likeMark = await Like.findOne({ where: { Users_id, Drawings_id } });
  if (likeMark) {
    try {
      likeMark.destroy();
      res.status(200).send({ message: "Your like mark deleted" });
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  } else {
    res.status(400).send({
      message: "Invalid access. please, check your account and post again",
    });
  }
};
