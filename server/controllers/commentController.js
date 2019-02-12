// let comments = require("../comments");
let Comment = require("../models/CommentModel");

exports.list =  function list(request, response) {
    // return response.json(comments);
    Comment.find().exec().then(c=>{
        return response.json(c);
    });
}
exports.show = function show(request, response) {
    // let comment = comments.find(c=> c._id == request.params.id);
    // return response.json(comment);
    Comment.findById(request.params.id).exec().then(c=>{
        return response.json(c);
    });
}
exports.create =  function create(request, response) {
    // let newComment = request.body
    // let idArray = [];
    // comments.forEach(c => idArray.push(c._id));
    // newComment._id = Math.max(...idArray) +1;
    // comments.push(newComment);
    // return response.json(newComment);
    let newComment = new Comment({
        body: request.body.body
    });
    newComment.save();
    return response.json(newComment);

}
exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
    return response.json({});
}