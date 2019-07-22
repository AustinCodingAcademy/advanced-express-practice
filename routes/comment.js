const express = require('express');
const router = express.Router();
let comments = require('../comments');

// COMMENTS
router.get('/comments', (req, res) => {
    res.json(comments);
  });

router.get('/comments/:commentId', (req, res) => {
    let comment = comments.find(x => x._id == req.params.commentId);
    res.json(comment);
});

router.post('/contacts', (req, res) => {
    let newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
});

module.exports = router;