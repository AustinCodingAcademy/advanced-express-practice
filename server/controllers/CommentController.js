const Comment = require("../model/Comment");

module.exports.list = function (request, response) {
  Comment.find({})
    .exec()
    .then((comments) => {
      return response.json(comments);
    });
};
module.exports.show = function (request, response) {
  Comment.findById({
    _id: request.params.id,
  })
    .exec()
    .then((comment) => {
      return response.json(comment);
    });
};
module.exports.create = function (request, response) {
  const newComment = new Comment(request.body);
  newComment.save().then((comment) => {
    return response.json(comment);
  });
};
module.exports.update = function (request, response) {
  const comment = new Comment(request.body);
  comment.save().then((saved) => {
    return response.json(saved);
  });
};
module.exports.remove = function (request, response) {
  Comment.findByIdAndRemove(request.params.id);
  return response.send("deleted");
};
