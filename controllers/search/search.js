const { Drawing } = require("../../models");

module.exports = async (req, res) => {
  const { words } = req.query;
  console.log(words);
  res.status(200).send("ok");
};
