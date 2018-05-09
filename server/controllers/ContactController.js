let contacts = require("../contacts");

module.exports.list = function list(req, res) {
    return res.json(contacts);
}

module.exports.show = function show(req, res) {
    res.json(contacts.find(user=>user._id == req.params.id));
}

module.exports.create = function create (req, res) {
    const newContact = req.body;
    contacts.push(newContact);
    return res.json(newContact)
}