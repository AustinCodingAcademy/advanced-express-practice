const contacts = require("../contacts.js");


module.exports.list = function list(req, res) {
  return res.json(contacts);
};
module.exports.show = function show(req, res) {
  return res.json(contacts.find(contact => contact._id == req.params.id));
};
module.exports.create = function create(req, res) {
  const newContact = req.body;
  newContact._id = (contacts.length + 1);
  contacts.push(newContact);
  res.json(newContact);
};