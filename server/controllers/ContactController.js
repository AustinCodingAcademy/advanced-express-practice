let contacts = require("../contacts");

exports.list =  function list(request, response) {
 return response.json(contacts);
}
exports.show = function show(request, response) {
 const getId = request.params.id;   
 return response.json(contacts[getId -1]);
}
exports.create =  function create(request, response) {
 const newContact = request.body;
 newContact._id = contacts.length+1;
 contacts.push(newContact);
 return response.json(contacts);
}
exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
 return response.json({});
}

