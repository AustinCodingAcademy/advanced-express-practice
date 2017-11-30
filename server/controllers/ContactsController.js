//const contacts = require("../contacts");
const Contact = require("../models/Contact");

function list(request, response) {
    Contact.find({}).exec()
    .then(contacts => {
        return response.json(contacts); 
    });
}

function show(request, response) {
    Contact.findById(request.params.id).exec()
    .then(contact => {
      return response.json(contact);
    });
}

function create(request, response) {
    const contact = new Contact({
        name: request.body.name,
        occupation: request.body.occupation,
        avatar: request.body.avatar,
    });
    contact.save()
    .then(contacts => {
      return response.json(contacts);
    });
}

module.exports = {
    list,
    show,
    create
}

/*export function update(request, response) {
    return response.json({theId: request.params.id});
}

export function remove(request, response) {
    return response.json({});
}*/