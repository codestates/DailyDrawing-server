const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");
const getProfileImg = require("../middlewares/profileImg");
const checkTokenValid = require("../middlewares/checkTokenValid");

router.get("/:id", controller.userGet);
router.patch("/update", checkTokenValid, getProfileImg, controller.userModify);
router.delete("/delete", checkTokenValid, controller.userDel);

module.exports = router;