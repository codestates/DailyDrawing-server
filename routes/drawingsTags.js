const express = require("express");
const router = express.Router();
const controller = require("../controllers/drawingsTags");
const checkTokenValid = require("../middlewares/checkTokenValid");

router.post("/upload", checkTokenValid, controller.postTagsRes);
router.patch("/update", checkTokenValid, controller.postTagsModify);
router.delete("/delete", checkTokenValid, controller.postTagsDel);

module.exports = router;
