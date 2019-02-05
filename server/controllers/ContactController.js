const contacts = require("../contacts");

exports.list = function list(request, response) {
    return response.json(contacts);
};
exports.show = function show(request, response) {
    const contactId = contacts.find(contact => {return request.params.id == contact["_id"] })
    return response.json(contactId);
};
exports.create = function create(request, response) {
    const contactBody = request.body;
    contactBody["_id"] = contacts.length + 1;
    contacts.push(contactBody);
    return response.json(contacts);
};
exports.update = function update(request, response) {
    return response.json({theId: request.params.id});
};
exports.remove = function remove(request, response) {
    return response.json({});
};
