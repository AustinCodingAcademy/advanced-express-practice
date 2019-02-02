const contacts = require("../contacts");

exports.list =  function list(request, response) {
    return response.json(contacts);
   }
   exports.show = function show(request, response) {
    const contact = contacts.find(c=>c._id == request.params.id);
    return response.json(contact);
   }
   exports.create =  function create(request, response) {
    console.log('creating stuff')
    const contact = request.body;
    contacts.push(contact);
    return response.json(product);
   }
   exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   exports.remove =  function remove(request, response) {
    return response.json({});
   }