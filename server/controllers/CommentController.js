const CommentModel = require("../models/Comment");

module.exports.list = function list(request, response) {
  CommentModel.find({}).exec()
  .then(comments => {
    response.json(comments);
  });
};

module.exports.show = function show(request, response) {
  CommentModel.findById(request.params.id).exec()
  .then(comment => {
    response.json(comment);
  });
};

module.exports.create = function create(request, response) {
  const newComment = new CommentModel(request.body);
  newComment.save()
  .then(savedComment => {
    response.json(savedComment);
  });
};

