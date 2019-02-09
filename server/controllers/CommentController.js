const Comment = require("./models/CommentModel");

// GET request
// exports.list = function list(request, response) {
//     return response.json(Comment);
// }
function findAll(done) {
    Comment.find(function (err, comments) {
        return (comments);
    });
    done();
}
module.exports = findAll;

// GET with an ID
exports.show = function show(request, response) {
    return response.json(Comment[request.params.id - 1]);
}

// POST request
exports.create = function create(request, response) {
    const newComment = request.body;
    newComment["_id"] = Comment.length + 1;
    Comment.push(newComment);
    return response.json(Comment);
}

// PUT request
exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}

// DELETE request
exports.remove = function remove(request, response) {
    return response.json({});
}