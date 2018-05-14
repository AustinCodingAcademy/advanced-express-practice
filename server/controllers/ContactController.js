const Contact = require("../model/Contact");

module.exports.list = function (request, response) {
  Contact.find({})
    .exec()
    .then((contacts) => {
      return response.json(contacts);
    });
};
module.exports.show = function (request, response) {
  Contact.findById({
    _id: request.params.id,
  })
    .exec()
    .then((contact) => {
      return response.json(contact);
    });
};
module.exports.create = function (request, response) {
  const newContact = new Contact(request.body);
  newContact.save().then((contact) => {
    return response.json(contact);
  });
};
module.exports.update = function (request, response) {
  const contact = new Contact(request.body);
  contact.save().then((saved) => {
    return response.json(saved);
  });
};
module.exports.remove = function (request, response) {
  Contact.findByIdAndRemove(request.params.id);
  return response.send("deleted");
};
