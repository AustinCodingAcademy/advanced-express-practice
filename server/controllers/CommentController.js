const Comment = require("../models/CommentModel");

function list(req, res) {
  Comment.find()
    .exec()
    .then(result => {
      return res.json(result);
    });
}

function show(req, res) {
  Comment.findById(req.params.id)
    .exec()
    .then(result => {
      return res.json(result);
    });
}

function create(req, res) {
  const newComment = new Comment(req.body);
  newComment.save().then(savedComment => {
    res.json(savedComment);
  });
}

module.exports = {
  list,
  show,
  create
};
