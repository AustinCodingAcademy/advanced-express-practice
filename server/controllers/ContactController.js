
const contactModel = require("../models/contactModel");

module.exports.list = function list(request, response) {
  contactModel.find({}).exec()
 .then(contact => {
   response.json(contact);
 });
};

module.exports.show = function show(request, response) {
  contactModel.findById(request.params.id).exec()
  .then(contact => {
    response.json(contact);
  });
};
 
module.exports.create = function create(request, response) {
  const newContact = new contactModel(request.body);
  newContact.save()
  .then(savedContact => {
    response.json(savedContact);
  });
 
};
