let Contact = require("../models/ContactModel.js")
var ObjectId = require('mongodb').ObjectID;

exports.list =  function list(request, response) {
    Contact.find(function (err, contacts) {
        if (err) return console.error(err);
        return response.json(contacts)
    })
    
}
exports.show = function show(request, response) {
    let contactId =  ObjectId(request.params.id)
    Contact.findById(contactId, function(err, contact) {
        if (err) return console.error(err)
        return response.json(contact)
    })
}
exports.create =  function create(request, response) {
    let body  = request.body
    let contact = new Contact( { name: body.name, occupation: body.occupation, avatar: body.avatar} )
    contact.save(function (err, comment) {
        if (err) return console.error(err);
    });
    return response.json(body);

}
exports.update =  function update(request, response) {
    
}
exports.remove =  function remove(request, response) {
    
}
