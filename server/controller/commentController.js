const Comment = require('../Models/commentModel')

module.exports.list = ((req,res)=>{
    Comment.find({}).exec()
    .then(comments=>{
      res.json(comments)
    })
})

module.exports.show = ((req, res)=>{
  Comment.findById({"_id":req.params.id}).exec()
  .then(comment=>{
    res.json(
      comment
    )
  })
})

module.exports.create = ((req, res)=>{
  const newComment = new Comment({
    body:req.body.body
  })
  newComment.save()
    .then(savedComment=>{
      res.json(savedComment)
    })
})

