const Comment = require('../server/schemas/commentsSchema')

exports.create = function create(req,res) {
  let item = {
    body: req.body.body
  };
  let newComment = new Comment(item)
  newComment.save();
}

exports.list = function list(req,res) {
  Comment.find((e,v)=>{
    return res.json(v);
  });
}

exports.show = function show(req, res) {
  Comment.findById(req.params.id, (err,v)=>{
      return res.json(v);
  });
}