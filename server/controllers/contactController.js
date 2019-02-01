let contacts = require("../contacts");

exports.list =  function list(request, response) {
    return response.json(contacts);
}
exports.show = function show(request, response) {
    let contact = contacts.find(c=> c._id == request.params.id);
    return response.json(contact);
}
exports.create =  function create(request, response) {
    let newContact = request.body
    let idArray = [];
    contacts.forEach(c => idArray.push(c._id));
    newContact._id = Math.max(...idArray) +1;
    contacts.push(newContact);
    return response.json(newContact);
}
exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
    return response.json({});
}
   