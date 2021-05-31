const express = require("express");
const router = express.Router();
const controller = require("../controllers/tag");

router.post("/add", controller.tagAdd);

module.exports = router;
