let comments = require("../comments");

// GET request
exports.list = function list(request, response) {
    return response.json(comments);
}

// GET with an ID
exports.show = function show(request, response) {
    return response.json(comments[request.params.id - 1]);
}

// POST request
exports.create = function create(request, response) {
    const newComment = request.body;
    newComment["_id"] = comments.length + 1;
    comments.push(newComment);
    return response.json(comments);
}

// PUT request
exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}

// DELETE request
exports.remove = function remove(request, response) {
    return response.json({});
}