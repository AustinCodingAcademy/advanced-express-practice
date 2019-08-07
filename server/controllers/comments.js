let comments = require("../../comments");

exports.list = function(req, res, next) {
  return res.json(comments);
};

exports.show = function show(req, res) {
  let id = req.params.id;
  let commentsID = comments.find(p => p["_id"] == id);

  return res.json(commentsID);
};

exports.create = function(req, res) {
  let comment = req.body;
  comments.push(comment);
  return res.json(comments);
};
