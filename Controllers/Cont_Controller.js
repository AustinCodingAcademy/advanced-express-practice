const contacts  = require("../Server/models/Contact_model");

//get - returns all comments
   exports.list =  function list(req, res) {
    return res.json(contacts);
   }
//get one comment by id   
   exports.show = function show(req, res) {
    let contact = contacts.find(c=>c.id === req.params._id);
    res.json(contact)
   }
   exports.create =  function create(req, res) {
    let newContact = req.body;
    contacts.push(newContact);
    res.json(newContact);
   }