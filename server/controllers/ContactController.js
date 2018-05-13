const ContactModel = require("../models/ContactModel");

module.exports.list = function list(req, res) {
  ContactModel.find({}).exec()
  .then(contact => {
    res.json(contact);
  });
};

module.exports.show = function show(req, res) {
  ContactModel.findById(req.params.id).exec()
  .then(contact => {
    res.json(contact);
  });
};

module.exports.create = function create(req, res) {
  const newContact = new ContactModel(req.body);
  newContact.save()
  .then(savedContact => {
    res.json(savedContact);
  });
};

