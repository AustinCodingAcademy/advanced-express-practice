let contacts = require("../../contacts");

exports.list = function(req, res, next) {
  return res.json(contacts);
};

exports.show = function show(req, res) {
  let id = req.params.id;
  let contactsID = contacts.find(p => p["_id"] == id);
  console.log(id);
  console.log(contactsID);
  return res.json(contactsID);
};

exports.create = function(req, res) {
  let contact = req.body;
  contacts.push(contact);
  return res.json(contacts);
};
