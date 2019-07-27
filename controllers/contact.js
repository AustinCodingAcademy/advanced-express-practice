let contacts = require('../contacts');

exports.list = function list(request, response) {
    return response.json(contacts);
}

exports.show = function show(request, response) {
    let contact = contacts.find(x => x._id == request.params.contactId);
    response.json(contact);
}

exports.create = function create(request, response) {
    let newContact = request.body;
    contacts.push(newContact);
    response.json(newContact);
}

exports.update = function update(request, response) {
    let contact = contacts.find(x => x._id == request.params.contactId);
    contact.name = body.name;
    contact.occupation = body.occupation;
    contact.avatar = body.avatar;
    response.json(contact);
}

exports.remove = function remove(reqeust, response) {
    let contact = contacts.find(x=> x._id == request.params.contactId);
    contact.isActive = false;
    response.send('deleted');
}