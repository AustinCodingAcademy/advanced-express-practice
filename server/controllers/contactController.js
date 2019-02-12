// let contacts = require("../contacts");
let Contact = require("../models/ContactModel")

exports.list =  function list(request, response) {
    // return response.json(contacts);
    Contact.find().exec().then(c=>{
        return response.json(c);
    });
}
exports.show = function show(request, response) {
    // let contact = contacts.find(c=> c._id == request.params.id);
    // return response.json(contact);
    Contact.findById(request.params.id).exec().then(c=>{
        return response.json(c);
    });
}
exports.create =  function create(request, response) {
    // let newContact = request.body
    // let idArray = [];
    // contacts.forEach(c => idArray.push(c._id));
    // newContact._id = Math.max(...idArray) +1;
    // contacts.push(newContact);
    // return response.json(newContact);
    let newContact = new Contact({
        name: request.body.name,
        occupation: request.body.occupation,
        avatar: request.body.avatar
    });
    newContact.save();
    return response.json(newContact);
}
exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
    return response.json({});
}
   