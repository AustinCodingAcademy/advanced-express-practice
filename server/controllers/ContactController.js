const contacts = require("../contacts");


exports.list = function list(request, response) {
  return response.json(contacts);
}
exports.show = function show(request, response) {
  return response.json(contacts.find(contact => {return request.params.id==contact["_id"]}));
}
exports.create = function create(request, response) {
  const tempBody = request.body
  tempBody["_id"]=Number(contacts[contacts.length-1]["_id"])+1
  contacts.push(tempBody)
  return response.json(contacts);
}
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
}
exports.remove = function remove(request, response) {
  return response.json({});
}