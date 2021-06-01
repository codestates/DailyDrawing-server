const { User } = require("../../models");

module.exports = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const userInfo = await User.findOne({ where: { id } });
    if (userInfo) {
      const { nickname, profileImg } = userInfo.dataValues;
      res.status(200).send({
        userInfo: { nickname, profileImg },
        message: "Get User's information successfully",
      });
    } else {
      res.status(400).send({ message: `The user is no exist` });
    }
  } catch (err) {
    res.status(500).send({ message: `${err.message}` });
  }
};
