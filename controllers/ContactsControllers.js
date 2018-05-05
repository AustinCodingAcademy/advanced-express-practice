const contacts = require("../server/contacts.js");

module.exports.list =  function list(request, response) {
    return response.json([contacts]);
}

module.exports.show =  function show(request, response) {
    return response.json(contacts.find(user => user._id == request.params.id));
}

module.exports.create =  function create(request, response) {
    const newContact = request.body;
    comments.push(newContact);
    return response.json(newContact);
}

module.exports.update =  function update(request, response) {
    const editContact = request.body
    return response.json(contact);
}

module.exports.remove =  function remove(request, response) {
    return response.json(contacts.pop(user => user._id == request.params.id))
}   