let express = require('express');
let router = express.Router();
const comments = require("./comments");

router.get('/comments', (req, res)=>{
    res.json(comments)
  })
  router.get('/comments/:id', (req, res)=>{
    let comment = comments.find(c=>c.id === req.params._id);
    res.json(comment)
  })
  router.post('/comments', (req,res)=>{
    let newComment = req.body;
    comments.push(newComment);
  })

module.exports = router