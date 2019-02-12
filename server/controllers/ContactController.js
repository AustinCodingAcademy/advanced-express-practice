let Contact = require("../models/ContactModel");

exports.list =  function list(request, response) {
    const query = Contact.find();
    query.exec((err, contacts) => {
        if (err) return console.error(err);
        return response.json(contacts);
    })  
}
exports.show = function show(request, response) {
    const getId = request.params.id
    Contact.findById(getId, (err, contacts) => {
        return response.json(contacts);
    })
}
exports.create =  function create(request, response) {
    const newInfo = request.body;
    const newContact = new Contact(newInfo);
    newContact.save((err,contacts) => {
        if (err) return console.error(err);
        return response.json(contacts);
    })
}
exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
 return response.json({});
}

