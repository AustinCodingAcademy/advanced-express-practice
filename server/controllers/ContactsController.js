const contacts = require('../contacts');

// get request
exports.list = function list(request, response) {
  return response.json(contacts);
};
// get by id request
exports.show = function show(request, response) {
  const contact = contacts.find(c=>c._id == request.params.id);
  return response.json(contact); 
};

// post request
exports.create = function create(request, response) {
  const contact = request.body;
  contacts.push(contact);
  return response.json(contact);
};

// put request
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};

// delete request
exports.remove = function remove(request, response) {
  return response.json({});
};