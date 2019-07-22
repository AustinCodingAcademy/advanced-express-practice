let contacts = require("../products");

exports.list = function list(req, res) {
    res.json(contacts)
}

exports.show = function show(req, res) {
    let contact = contact.filter(p=>p._id == req.params.idNum);
    res.json(contact)
}

exports.create = function create(req, res) {
    let newContact = req.body;
    contacts.push(newContact);
    res.json(newContact)
}

exports.update = function update(req, res) {
    let contact = contacts.filter(p=>p._id == req.params.idNum);
    contact.make = body.make;
    res.json(contact)
}

exports.remove = function remove(req, res) {
    let contact = contacts.filter(p=>p._id == req.params.idNum);
    contact.isActive = false;
    res.send("deleted")
}