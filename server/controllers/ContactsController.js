import ContactModel from "../models/ContactModel";


export function list(request, response) {
    ContactModel.find({}).exec()
        .then(contacts => {
            return response.json(contacts);
        });
}

export function show(request, response) {
    let contactId = request.params.id;
    let singleContact = contacts.find(function (contact) {
        return contactId === contact._id;
    });
    return response.json(singleContact);
}

export function create(request, response) {
    const contact = new ContactModel({
        name: request.body.name,
        occupation: request.body.occupation,
        avatar: request.body.avatar,
    });
    contact.save()
        .then(contact => {
            return response.json(contact);
        });
}

export function update(request, response) {
    ContactModel.findById(request.params.id).exec()
        .then(vehicle => {
            contact.name = request.body.name || contact.name;
            contact.occupation = request.body.occupation || contact.occupation;
            contact.avatar = request.body.avatar || contact.avatar;
            return contact.save();
        })
        .then(contact => {
            return response.json(contact);
        })
}

export function remove(request, response) {
    return response.json({});
}