let comments = require("../comments");

exports.list =  function list(request, response) {
    return response.json(comments);
}
exports.show = function show(request, response) {
    let comment = comments.find(c=> c._id == request.params.id);
    return response.json(comment);
}
exports.create =  function create(request, response) {
    return response.json({});
}
exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
    return response.json({});
}
   