var comments = require("../../comments");


exports.list = function list(request, response) {
  return response.json(comments);
}
exports.show = function show(request, response) {
  return response.json( comments.find(comment => {return request.params.id == comment["_id"]}) );
}
exports.create = function create(request, response) {  
  let tempBody = request.body;
  tempBody["_id"] = comments.length + 1;
  comments.push(tempBody);
  return response.json(comments);
}
