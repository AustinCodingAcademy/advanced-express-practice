const comments = require("../comments");


exports.list = function list(request, response) {
  return response.json(comments);
}
exports.show = function show(request, response) {
  return response.json(comments.find(comment =>{
    return request.params.id == comment[`_id`];
    }));
 }
exports.create = function create(request, response) {
  const comment = request.body;
  comments.push(comment);
  return response.json(comment);
}
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
  return response.json({});
}

