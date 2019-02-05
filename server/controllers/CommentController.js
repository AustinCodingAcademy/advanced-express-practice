const comments = require("../comments");

exports.list = function list(request, response) {
    return response.json(comments);
};
exports.show = function show(request, response) {
    const commentId = comments.find(comment => {return request.params.id == comment["_id"] })
    return response.json(commentId);
};
exports.create = function create(request, response) {
    const commentBody = request.body;
    commentBody["_id"] = comments.length + 1;
    comments.push(commentBody);
    return response.json(comments);
};
exports.update = function update(request, response) {
    return response.json({theId: request.params.id});
};
exports.remove = function remove(request, response) {
    return response.json({});
};
