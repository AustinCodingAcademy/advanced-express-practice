const Contact = require("../models/ContactModel");

exports.list = function list(request, response) {
    Contact.find().exec().then((contacts)=>{
        return response.json(contacts);
    })
}

exports.show = function show(request, response) {
    Contact.findById(request.params.id).exec().then((contact)=> {
        return response.json(contact);
    })
}

exports.create =  function create(request, response) {
    const newContact = new Contact({
        name: request.body.name,
        occupation: request.body.occupation,
        avatar: request.body.avatar
    })
    newContact.save().then(savedContact=>{
        console.log(savedContact)
    })    
}

exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}

exports.remove =  function remove(request, response) {
    return response.json({});
}