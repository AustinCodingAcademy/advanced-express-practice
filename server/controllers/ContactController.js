const contacts = require("../contacts");
let contactCount = contacts.length;

module.exports.list =  function list(req, res) {
    return res.json(contacts);
   }
module.exports.show =  function show(req, res) {
    let contact = contacts.find((co) => co._id == req.params.id);
    return res.json(contact);
   }
module.exports.create =  function create(req, res) {
    let newContact = req.body;
    contacts.push(newContact);
    contactCount++;
    newContact._id = contactCount;
    return res.json(newContact);
   }
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }
module.exports.remove =  function remove(req, res) {
    return res.json({});
   }
   