const { User } = require("../../models");

module.exports = async (req, res) => {
  const id = res.userId;
  const { password } = req.body;

  try {
    let userValid = await User.findOne({ where: { id } });

    if (userValid) {
      userValid = userValid.dataValues;
      try {
        await User.update(
          { ...userValid, password, updatedAt: Date.now() },
          { where: { id } }
        );
        res.status(200).send({ message: "Password was updated successfully" });
      } catch (err) {
        res.status(500).send({ message: `${err.message}` });
      }
    } else {
      res
        .status(400)
        .send({ message: "Invalid access. please, try again after relogin" });
    }
  } catch (err) {
    res.status(500).send({ message: `${err.message}` });
  }
};
