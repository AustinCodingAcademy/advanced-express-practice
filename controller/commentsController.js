const Comment = require('../server/schemas/commentsSchema')

exports.create = function(req,res) {
  let item = {
    body: req.body.body
  };
  let newComment = new Comment(item)
  newComment.save();
}

exports.list = function(req,res) {
  Comment.find()
    .then(function(doc) {
      res.render('index:', {items: doc});
    })
}