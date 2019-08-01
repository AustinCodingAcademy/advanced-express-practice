const Contact = require('../server/schemas/contactsSchema')

exports.create = function create(req,res) {
  let item = {
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };
  let newContact = new Contact(item)
  newContact.save();
}

exports.list = function list(req,res) {
  Contact.find((e,v)=>{
    return res.json(v);
  });
}

exports.show = function show(req, res) {
  Contact.findById(req.params.id, (err,v)=>{
      return res.json(v);
  });
}