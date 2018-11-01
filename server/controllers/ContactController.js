const contacts = require("../contacts");
let contactIdCount = contacts.length; 
// .get contacts
module.exports.list = function list(req, res) {
   return res.json(contacts);
}
// .get contact by ID
module.exports.show = function show(req, res) {
   let contact = contacts.find((contact) => contact._id == req.params.id);
   return res.json(contact);
}
// .post new contact
module.exports.create = function create(req, res) {
   contactIdCount++
   const newContact = {
      _id: contactIdCount,
      name: req.body.name,
      occupation: req.body.occupation
   }
   // add new contact to contacts array
   contacts.push(newContact);
   // return array with added contact
   return res.json(contacts);
}
// .put contact by ID
module.exports.update = function update(req, res) {
   return res.json({theId: req.params.id});
}
// .delete contact by ID
module.exports.remove = function remove(req, res) {
   return res.json({});
}
  