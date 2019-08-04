const express = require("express");
const router = express.Router();
const {list, show, create} = require("../controllers/comments");



// COMMENTS

router.get('/comments', list)
router.get('/comments/:id', show)
router.post('/comments', create)
// router.get('/comments', (req, res) => {
//     res.json(comments)
//   })
  
// router.get('/comments/:commentId', (req,res) => {
//    let id = comments.filter(i => i._id == req.params.commentId);
//     res.json(id)
//   })
  
// router.post('/comments', (req, res)=> {
//     let newComment = req.body;
//     comments.push(newComment)
//     res.json(newComment)
//   })

  module.exports = router;