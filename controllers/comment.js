let comments = require('../comments');

exports.list = function list(request, response) {
    return response.json(comments);
}

exports.show = function show(request, response) {
    let comment = comments.find(x => x._id == request.params.commentId);
    response.json(comment);
}

exports.create = function create(request, response) {
    let newComment = request.body;
    comments.push(newComment);
    response.json(newComment);
}

exports.update = function update(request, response) {
    let comment = comments.find(x => x._id == request.params.commentId);
    comment.body = body.body;
    response.json(comment);
}

exports.remove = function remove(reqeust, response) {
    let comment = comments.find(x => x._id == request.params.commentId);
    comment.isActive = false;
    response.send('deleted');
}