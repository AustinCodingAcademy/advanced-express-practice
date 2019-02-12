const Contact = require("../models/ContactModel");

// GET request
exports.list = function list(request, response) {
    Contact.find().exec().then((contacts) => {
        return response.json(contacts);
    });
}

// GET with an ID
exports.show = function show(request, response) {
    Contact.findById(request.params.id).exec().then((contact) => {
        return response.json(contact);
    });
}

// POST request
exports.create = function create(request, response) {
    const newContact = new Contact(
        request.body
    );
    newContact.save().then(savedContact => {
        response.json(savedContact);
    });
};
