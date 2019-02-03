const comments = require("../comments");

// get request
exports.list = function list(request, response) {
  return response.json(comments);
};

// get by id request
exports.show = function show(request, response) {
  const comment = comments.find(c=>c._id == request.params.id);
  return response.json(comment);
};

// post request
exports.create = function create(request, response) {
  const comment = request.body;
  comments.push(comment);
  return response.json(comment);
};

// put request
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};

// delete request
exports.remove = function remove(request, response) {
  return response.json({});
};
