const express = require("express");
const router = express.Router();
const {list, show, create} = require("./controllers/comment");

let comments = require("../comments");

//vehicles
router.get('/comments', list)
router.get('/comments/:commentId', show)
router.post('/comments', create)

module.exports = router;