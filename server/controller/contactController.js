const Contact = require("../Models/contactModel")

module.exports.list = ((req,res)=>{
  Contact.find({}).exec()
  .then(contact=>{
    res.json(contact)
  })
})

module.exports.show = ((req, res)=>{
  Contact.findById({"_id":req.params.id}).exec()
  .then(contact=>{
    res.json(contact)
  })
})

module.exports.create = ((req, res)=>{
  const newContact = new Contact({
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  })
  newContact.save()
  .then(savedContact=>{
    res.json(savedContact)
  })
})