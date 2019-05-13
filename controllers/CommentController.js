let Comment = require("../models/CommentModel.js")
var ObjectId = require('mongodb').ObjectID;

exports.list =  function list(request, response) {
    Comment.find(function (err, comments) {
        if (err) return console.error(err);
        return response.json(comments)
    })
    
}
exports.show = function show(request, response) {
    let commentId =  ObjectId(request.params.id)
    Comment.findById(commentId, function(err, comment) {
        if (err) return console.error(err)
        return response.json(comment)
    })
}
exports.create =  function create(request, response) {
    let body  = request.body
    let comment = new Comment( { body: body.body} )
    comment.save(function (err, comment) {
        if (err) return console.error(err);
    });
    return response.json(body);



}
exports.update =  function update(request, response) {
    
}
exports.remove =  function remove(request, response) {
    
}
