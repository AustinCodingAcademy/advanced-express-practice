const Contact = require('../server/schemas/contactsSchema')

exports.create = function(req,res) {
  let item = {
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };
  let newContact = new Contact(item)
  newContact.save();
}

exports.list = function(req,res) {
  Contact.find()
    .then(function(doc) {
      res.render('index:', {items: doc});
    })
}