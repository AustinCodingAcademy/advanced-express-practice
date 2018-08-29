const CommentModel = require("../models/Comment");

module.exports.list = function list(req, res, next) {
    CommentModel.find({}).exec()
    .then(c => {
      return res.json(c);
    });
}

module.exports.show = function show(req, res, next) {
    CommentModel.findById(req.params.id).exec()
    .then(c => {
        return res.json(c);
      });
}

module.exports.create = function create(req, res, next) {
    const newComment = new CommentModel(req.body);
    newComment.save()
    .then(message => {
      res.json(message);
    });
}

   