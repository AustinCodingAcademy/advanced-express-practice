const comments = require("../comments.js");

module.exports.list = function list(req, res) {
  return res.json(comments);
};
module.exports.show = function show(req, res) {
  return res.json(comments.find(comment => comment._id == req.params.id));
};
module.exports.create = function create(req, res) {
  const newComment = req.body;
  newComment._id = (comments.length + 1);
  comments.push(newComment);
  res.json(newComment);
};
//    module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
//    }
//    module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }

