let comments = require("../comments");

exports.list =  function list(request, response) {
 return response.json(comments);
}
exports.show = function show(request, response) {
 const getId = request.params.id;   
 return response.json(comments[getId -1]);
}
exports.create =  function create(request, response) {
 const newComment = request.body;
 newComment._id = comments.length+1;
 comments.push(newComment);
 return response.json(comments);
}
exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
 return response.json({});
}