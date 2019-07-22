const express = require("express");
const router = express.Router();
const {list, show, create} = require("../controller/comments")

router.get("/comments", list);
router.get("/comments/:idNum", show);
router.post('/comments', create);

module.exports = router;