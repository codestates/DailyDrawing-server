const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");
const getProfileImg = require("../middlewares/profileImg");
const checkTokenValid = require("../middlewares/checkTokenValid");

router.get("/:id", controller.userGet);
router.post("/checkPW", checkTokenValid, controller.checkUserPW);
router.patch(
  "/updateProfileImg",
  checkTokenValid,
  getProfileImg,
  controller.userProfileImgModify
);
router.patch("/updatePW", checkTokenValid, controller.userPWModify);
router.delete("/delete", checkTokenValid, controller.userDel);

module.exports = router;
