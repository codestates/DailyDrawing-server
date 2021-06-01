const { User } = require("../../models");

module.exports = async (req, res) => {
  const id = res.userId;
  const { password } = req.body;

  try {
    const userValid = await User.findOne({ where: { id, password } });

    if (userValid) {
      res.status(200).send({ message: "Correct password" });
    } else {
      res
        .status(400)
        .send({ message: "Invalid password. please, check the password." });
    }
  } catch (err) {
    res.status(500).send({ message: `${err.message}` });
  }
};
