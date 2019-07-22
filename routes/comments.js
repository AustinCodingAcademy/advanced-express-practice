const express = require("express");
const router = express.Router();

let comments = require("../comments");

router.get("/comments", (req, res) => {
    res.json(comments)
});
  
router.get("/comments/:idNum", (req, res) => {
    let comment = comments.filter(p=>p._id == req.params.idNum);
    res.json(comment)
});

router.post('/comments', (req,res) => {
    let newComment = req.body;
    comments.push(newComment);
    res.json(newComment)
});

  module.exports = router;