let contacts = require("../contacts")

exports.list = function list(req, res) {
    return res.json(contacts)
}

exports.show = function show(req, res) {
    let contact = contacts.find(p => p._id == req.params.id);
    return res.json(contact)
}

exports.create = function create(req, res) {
    let contact = req.body;
    contacts.push(contact);
    res.json(contact)
}

exports.update = function update(res, req) {
    let contact = contacts.find(p => p._id == req.params.id);
    contact.make = body.make;
    res.json(contact)
}

exports.remove = function remove(res, req) {
    let contact = contacts.find(p => p._id == req.params.id)
    contact.isActive == false;
    res.send("deleted")
}