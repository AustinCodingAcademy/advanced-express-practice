const Contact = require("../models/ContactModel");

exports.list = function list(request, response) {
    Contact.find(function (err, contacts) {
        if (err) return console.error(err);
        return response.json(contacts)
      });
};
exports.show = function show(request, response) {
    Contact.findById(request.params.id, function(err, contacts){
        return response.json(contacts)
    })
    // const contactId = contacts.find(contact => {return request.params.id == contact["_id"] })
    // return response.json(contactId);
};
exports.create = function create(request, response) {
    const contactBody = request.body;
    const newContact = new Contact(contactBody);
    newContact.save(function (err, contacts) {
        if (err) return console.error(err);
        return response.json(contacts)
      });
    // contactBody["_id"] = contacts.length + 1;
    // contacts.push(contactBody);
    // return response.json(contacts);
};
exports.update = function update(request, response) {
    return response.json({theId: request.params.id});
};
exports.remove = function remove(request, response) {
    return response.json({});
}; 
