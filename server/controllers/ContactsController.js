// const contacts = require('../contacts');
const Contact = require("../models/ContactModel");

// get request
module.exports.list = (request, response) => {
  Contact.find({}).exec().then((contacts) => {
    return response.json(contacts);
  });
};
// get by id request
module.exports.show = (request, response) => {
  Contact.findById(request.params.id).exec().then((contact) => {
    return response.json(contact); 
  });
};

// post request
module.exports.create = (request, response) => {
  const newContact = new Contact({
    name: request.body.name,
    occupation: request.body.occupation,
    avatar: request.body.avatar
  });
  newContact.save().then(saveContact => {
    return response.json(saveContact);
  });
};

// put request
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};

// delete request
exports.remove = function remove(request, response) {
  return response.json({});
};
