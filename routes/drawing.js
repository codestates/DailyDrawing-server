const express = require("express");
const router = express.Router();
const controller = require("../controllers/drawing");
const getImage = require("../middlewares/getImage");
const checkTokenValid = require("../middlewares/checkTokenValid");

router.post("/upload", controller.drawingUpload);
router.patch("/update", controller.drawingUpdate);
router.delete("/delete", controller.drawingDelete);

module.exports = router;
