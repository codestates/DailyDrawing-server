const express = require("express");
const router = express.Router();
const controller = require("../controllers/sign");
const checkTokenValid = require("../middlewares/checkTokenValid");

router.post("/in", controller.signin);
router.post("/up", controller.signup);
// router.get("/out", checkTokenValid, controller.signout);

module.exports = router;
