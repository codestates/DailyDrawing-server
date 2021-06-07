const express = require("express");
const router = express.Router();
const controller = require("../controllers/like");
const checkTokenValid = require("../middlewares/checkTokenValid");

router.get("/get", checkTokenValid, controller.likeGet);
router.post("/up", checkTokenValid, controller.likeUp);
router.delete("/down", checkTokenValid, controller.likeDown);
router.get("/count/:id", controller.likeCount);

module.exports = router;
