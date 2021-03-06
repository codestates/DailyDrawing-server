const express = require("express");
const router = express.Router();
const controller = require("../controllers/drawing");
const getImage = require("../middlewares/getImage");
const checkTokenValid = require("../middlewares/checkTokenValid");

router.post("/upload", checkTokenValid, getImage, controller.drawingUpload);
router.patch("/update", checkTokenValid, getImage, controller.drawingUpdate);
router.delete("/delete", checkTokenValid, controller.drawingDelete);
router.get("/:id", controller.drawingGet);

module.exports = router;
