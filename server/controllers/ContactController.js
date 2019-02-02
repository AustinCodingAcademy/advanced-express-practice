let contacts = require("../contacts");

// GET request
exports.list = function list(request, response) {
    return response.json(contacts);
}

// GET with an ID
exports.show = function show(request, response) {
    return response.json(contacts[request.params.id - 1]);
}

// POST request
exports.create = function create(request, response) {
    return response.json(contacts);
}

// PUT request
exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}

// DELETE request
exports.remove = function remove(request, response) {
    return response.json({});
}   