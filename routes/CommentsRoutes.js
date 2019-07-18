const express = require('express');
const router = express.Router();
let comments = require("../controllers/CommentsControllers");

router.get('/comments', comments.list);
router.get("/comments/:id", comments.show);
router.post("/comments", comments.create);

module.exports = router;