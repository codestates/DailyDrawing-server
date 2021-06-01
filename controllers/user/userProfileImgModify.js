const { User } = require("../../models");

module.exports = async (req, res) => {
  const id = res.userId;
  let userInfo = await User.findOne({ where: { id } });
  userInfo = userInfo ? userInfo.dataValues : null;
  if (userInfo) {
    const profileImg = req.file.filename;
    await User.update(
      {
        ...userInfo,
        updatedAt: Date.now(),
        profileImg,
      },
      { where: { id } }
    );
    res.status(200).send({ message: "ProfileImg updated successful" });
  } else {
    res.status(400).send({ message: "Please, try again after relogin." });
  }
};
