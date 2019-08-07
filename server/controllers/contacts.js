const Contact = require("../models/contactModel");

exports.list = function(req, res, next) {
  Contact.find((e, v) => {
    return res.json(v);
  });
};

exports.show = function show(req, res) {
  Contact.findById(req.params.id, (err, v) => {
    return res.json(v);
  });
};

exports.create = function(req, res) {
  let item = {
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };

  let newContact = new Contact(item);
  newContact.save();
};

//====old show function=====
// exports.show = function show(req, res) {
//   let id = req.params.id;
//   let contactsID = contacts.find(p => p["_id"] == id);
//   console.log(id);
//   console.log(contactsID);
//   return res.json(contactsID);
// };
