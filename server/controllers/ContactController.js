const ContactModel = require("../models/ContactModel.js");


module.exports.list = function list(req, res) {
  return ContactModel.find({}).exec().then(contacts => res.json(contacts));
};
module.exports.show = function show(req, res) {
  return ContactModel.findById(req.params.id).exec().then(contact => res.json(contact)); 
};
module.exports.create = function create(req, res) {
  const newContact = new ContactModel(req.body);
  newContact.save().then(savedContact => res.json(savedContact));
};
// module.exports.update = function update(request, response) {
//   return response.json({theId: request.params.id});
// }
// module.exports.remove = function remove(request, response) {
//   return response.json({});
// }
