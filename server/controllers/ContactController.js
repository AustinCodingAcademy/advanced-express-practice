const contacts = require("../contacts");


let ContactModel = require('../models/ContactModel');

module.exports.list =  function list(req, res) {
    ContactModel.find({}).exec()
    .then(contact => {
        return res.json(contact);
    });

   }
module.exports.show =  function show(req, res) {
    ContactModel.findById(req.params.id).exec()
    .then(contact => {
        return res.json(contact);;
     });
    }

module.exports.create =  function create(req, res) {
    let newContacts = new ContactModel({
      name: req.body.name,
      occupation: req.body.occupation,
      avatar: req.body.avatar
    })
    newContacts.save()
    .then(contact=>{
        res.json(contact)
    })
   }
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }
module.exports.remove =  function remove(req, res) {
    return res.json({});
   }
   