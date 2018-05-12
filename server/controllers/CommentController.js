const CommentModel = require("../models/CommentModel.js");

module.exports.list = function list(req, res) {
  return CommentModel.find({}).exec().then(comments => res.json(comments));
};
module.exports.show = function show(req, res) {
  return CommentModel.findById(req.params.id).exec().then(comment => res.json(comment)); 
};
module.exports.create = function create(req, res) {
  const newComment = new CommentModel(req.body);
  newComment.save().then(savedComment => res.json(savedComment));
};
// module.exports.update = function update(request, response) {
//      return response.json({theId: request.params.id});
//    }
// module.exports.remove = function remove(request, response) {
//      return response.json({});
//    }

