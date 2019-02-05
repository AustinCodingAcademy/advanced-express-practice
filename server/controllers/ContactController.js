const contacts = require("../contacts");

exports.list =  function list(request, response) {
    return response.json(contacts);
   }
   exports.show = function show(request, response) {
    const viewContact = contacts.find(c=>c._id == request.params.id);
    return response.json(viewContact);
   }
   exports.create =  function create(request, response) {
    console.log('creating stuff')
    const newContact = request.body;
    contacts.push(newContact);
    return response.json(newContact);
   }
   exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   exports.remove =  function remove(request, response) {
    return response.json({});
   }