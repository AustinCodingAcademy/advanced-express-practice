const Comment = require("../models/CommentModel");

exports.list = function list(request, response) {
    Comment.find(function (err, comments) {
        if (err) return console.error(err);
        return response.json(comments)
      });
};
exports.show = function show(request, response) {
    Comment.findById(request.params.id, function(err, comments){
        return response.json(comments)
    })
    // const commentId = comments.find(comment => {return request.params.id == comment["_id"] })
    // return response.json(commentId);
};
exports.create = function create(request, response) {
    const commentBody = request.body;
    const newComment = new Comment(commentBody);
    newComment.save(function (err, comments) {
        if (err) return console.error(err);
        return response.json(comments)
      });
    // commentBody["_id"] = comments.length + 1;
    // comments.push(commentBody);
    // return response.json(comments);
};
exports.update = function update(request, response) {
    return response.json({theId: request.params.id});
};
exports.remove = function remove(request, response) {
    return response.json({});
}; 
