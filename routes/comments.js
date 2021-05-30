const express = require("express");
const router = express.Router();
const controller = require("../controllers/comments");
const checkTokenValid = require("../middlewares/checkTokenValid");

router.get("/:id", controller.comments);
router.post("/upload", checkTokenValid, controller.commentUp);
router.patch("/modify", checkTokenValid, controller.commentModify);
router.delete("/delete", checkTokenValid, controller.commentDel);

module.exports = router;
