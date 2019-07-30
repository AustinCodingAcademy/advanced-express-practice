const express = require("express");
const router = express.Router();
const {list, create} = require("../controller/commentsController")

router.get("/comments", list);
//router.post('/comments', create);

module.exports = router;