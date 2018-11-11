const express = require("express");
const { list, show, create } = require("../controllers/CommentController");

const router = express.Router();

router.get("/", list);
router.get("/:id", show);
router.post("/", create);

module.exports = router;
