let contactsModel = require("../Models/contacts");

// GET request
exports.list = function list(request, response) {
    contactsModel.find().exec().then(contacts => {
        return response.json(contacts)
    })
}

// GET with an ID
exports.show = function show(request, response) {
    contactsModel.findById(request.params.id).exec().then(contact => {
        return response.json(contact);
    })
}

// POST request
exports.create = function create(request, response) {
    const newContact = new contactsModel({
        name: request.body.name,
        occupation: request.body.occupation,
        avatar: request.body.avatar
    })
    newContact.save().then(savedContact => {
        console.log(savedContact)
    })
}

// PUT request
exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}

// DELETE request
exports.remove = function remove(request, response) {
    return response.json({});
}   