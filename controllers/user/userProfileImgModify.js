const { User } = require("../../models");

module.exports = async (req, res) => {
  const id = res.userId;
  let userInfo = await User.findOne({ where: { id } });
  userInfo = userInfo ? userInfo.dataValues : null;
  if (userInfo) {
    const profileImg = req.file.filename;
    try {
      await User.update(
        {
          ...userInfo,
          updatedAt: Date.now(),
          profileImg,
        },
        { where: { id } }
      );
      res
        .status(200)
        .send({ profileImg, message: "ProfileImg updated successful" });
    } catch (err) {
      res.status(500).send({ message: `${err.message}` });
    }
  } else {
    res.status(400).send({ message: "Please, try again after relogin." });
  }
};
