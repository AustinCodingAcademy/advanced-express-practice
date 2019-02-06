var contacts = require("../../contacts");


exports.list = function list(request, response) {
  return response.json(contacts);
}
exports.show = function show(request, response) {
  return response.json( contacts.find(comment => {return request.params.id == comment["_id"]}) );
}
exports.create = function create(request, response) {  
  let tempBody = request.body;
  tempBody["_id"] = contacts.length + 1;
  contacts.push(tempBody);
  return response.json(contacts);
}
