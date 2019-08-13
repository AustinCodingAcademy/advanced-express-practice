let ContactModel = require("../models/ContactModel")

//get - return all vechicles
exports.list = function list(req, res) {
    ContactModel.find(function (err, contacts){
        if (err) return  console.error(err);
        return res.json(contacts);
    })
}

//get one vehicle by id
exports.show = function show(req, res) {
    ContactModel.findById(req.params.contactId, function (err, contact){
        if (err) return  console.error(err);
        return res.json(contact);
    })
}

//post 
exports.create = function create(req, res) {
    const newContact = new ContactModel(req.body);
    newContact.save((err, v) => {
        res.json(v);
    });  
}

//put
exports.update = function update(req, res) {
    let contact = contacts.find(i => i._id == req.params.contactId);
    contact.name = body.name;
    res.json(contact)
}

//delete
exports.remove = function remove(req, res) {
    let contact = contacts.find(i => i._id == req.params.contactId);
    contact.isActive = false;
    res.send("deleted")
}

