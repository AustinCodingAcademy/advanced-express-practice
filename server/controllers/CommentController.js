const Comment = require("../models/CommentModel");

exports.list = function list(request, response) {
  Comment.find(function (err, comments) {
    if (err) return console.error(err)        
    return response.json(comments)
  })
}
exports.show = function show(request, response) {
  Comment.findById(request.params.id,function (err, comments) {
    if (err) return console.error(err)        
    return response.json(comments)
  })
}
exports.create = function create(request, response) {  
  const tempBody = request.body
  const newComment = new Comment({
   body: tempBody.body,
  });
  newComment.save(function (err, comments) {
    if (err) return console.error(err)        
    return response.json(comments)
  })
}
exports.update = function update(request, response) {
  // not yet implimented
  return response.json({theId: request.params.id});
}
exports.remove = function remove(request, response) {
  // not yet implimented
  return response.json({});
}