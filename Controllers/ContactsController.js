let contacts = require('../contacts');

exports.list = function list(request, response) {
    return response.json(contacts);
}

exports.show = function show(request, response) {
    let id = Number(request.params.id);
    let contact = contacts.find( c => c._id === id );
    return response.json(contact);
}

exports.create = function create(request, response) {
    let newContact = request.body;
    newContact._id = contacts[contacts.length - 1]._id + 1;
    contacts.push(newContact);
    return response.json(contacts);
}

exports.update = function update(request, response) {
    return response.json({theId: request.params.id});
}

exports.remove = function remove(request, response) {
    return response.json({});
}
   