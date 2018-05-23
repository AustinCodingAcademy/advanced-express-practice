let Contact = require("../models/contactModel")

module.exports.list =  function list(request, response) {
    Contact.find({}).exec()
    .then(contacts => response.json(contacts))
};
module.exports.show =  function show(request, response) {
    Contact.findById({"_id": request.params.id}).exec()
    .then(contact => response.json(contact))
};

module.exports.create =  function create(request, response) {
    const newContact = new Contact(request.body);
    newContact.save()
    .then(savedContact => response.json(savedContact))
};

module.exports.remove =  function remove(request, response) {
    const foundContact = contacts.find(contact => contact["_id"] == request.params.id)
    contacts = contacts.filter(contact => contact["_id"] != request.params.id)
    return response.json(contacts);
}