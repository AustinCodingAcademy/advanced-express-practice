const Contact = require("../models/ContactModel");

function list(req, res) {
  Contact.find()
    .exec()
    .then(result => {
      return res.json(result);
    });
}

function show(req, res) {
  Contact.findById(req.params.id)
    .exec()
    .then(result => {
      return res.json(result);
    });
}

function create(req, res) {
  const newContact = new Contact(req.body);
  newContact.save().then(savedContact => {
    res.json(savedContact);
  });
}

module.exports = {
  list,
  show,
  create
};
