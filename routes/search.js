const express = require("express");
const router = express.Router();
const controller = require("../controllers/search");

router.get("/post?", controller.search);

module.exports = router;
