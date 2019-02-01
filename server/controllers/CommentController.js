const comments = require("../comments");


exports.list = function list(request, response) {
  return response.json(comments);
}
exports.show = function show(request, response) {
  return response.json(  comments.find(comment => {return request.params.id==comment["_id"]}));
}
exports.create = function create(request, response) {  
  const tempBody = request.body
  tempBody["_id"]=Number(comments[comments.length-1]["_id"])+1
  comments.push(tempBody)
  return response.json(comments);
}
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
}
exports.remove = function remove(request, response) {
  return response.json({});
}