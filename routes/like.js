const express = require("express");
const router = express.Router();
const controller = require("../controllers/like");
const checkTokenValid = require("../middlewares/checkTokenValid");

router.post("/up", checkTokenValid, controller.likeUp);
router.delete("/down", checkTokenValid, controller.likeDown);

module.exports = router;
