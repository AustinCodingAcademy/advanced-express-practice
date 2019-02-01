const contacts = require("../contacts");

exports.list =  function list(request, response) {
    return response.json(contacts);
   }
   exports.show = function show(request, response) {
    const contact = contacts.find(c=>c._id == request.params.id);
    return response.json(contact);
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