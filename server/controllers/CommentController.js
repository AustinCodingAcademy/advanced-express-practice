const comments = require("../comments");
let commentIdCount = comments.length; 
// .get comments
module.exports.list = function list(req, res) {
   return res.json(comments);
}
// .get comment by ID
module.exports.show = function show(req, res) {
   let comment = comments.find((comment) => comment._id == req.params.id);
   return res.json(comment);
}
// .post new comment
module.exports.create = function create(req, res) {
   commentIdCount++
   const newComment = {
      _id: commentIdCount,
      name: req.body.name,
      occupation: req.body.occupation
   }
   // add new comment to comments array
   comments.push(newComment);
   // return array with added comment
   return res.json(comments);
}
// .put comment by ID
module.exports.update = function update(req, res) {
   return res.json({theId: req.params.id});
}
// .delete comment by ID
module.exports.remove = function remove(req, res) {
   return res.json({});
}
  