const CommentModel = require("../models/CommentModel");

module.exports.list = function list(req, res) {
  CommentModel.find({}).exec()
  .then(comment => {
    res.json(comment);
  });
};

module.exports.show = function show(req, res) {
  CommentModel.findById(req.params.id).exec()
  .then(comment => {
    res.json(comment);
  });
};

module.exports.create = function create(req, res) {
  const newComment = new CommentModel(req.body);
  newComment.save()
  .then(savedComment => {
    res.json(savedComment);
  });
};
