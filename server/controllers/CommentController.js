const comments = require("../comments");
const UserModel = require("./models/CommentModel");

UserModel.find({}).exec()
.then(comment => {
  console.log(comment);
});

module.exports.list = function list(req, res) {
  return res.json(comments);
};

module.exports.show = function show(req, res) {
  res.json(comments.find(user => user._id == req.params.id));
};

module.exports.create = function create(req, res) {
  const newComment = req.body;
  comments.push(newComment);
  return res.json(newComment);
};
