const Comment = require("../models/CommentModel");

exports.list =  function list(request, response) {
    const query = Comment.find();
    query.exec((err, comments) => {
        if (err) return console.error(err);
        return response.json(comments);
    }) 
}
exports.show = function show(request, response) {
    const getId = request.params.id
    Comment.findById(getId, (err, comments) => {
        return response.json(comments);
    })
}
exports.create =  function create(request, response) {
    const newInfo = request.body;
    const newComment = new Comment(newInfo);
    newComment.save((err,comments) => {
        if (err) return console.error(err);
        return response.json(comments);
    })
}
exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
 return response.json({});
}