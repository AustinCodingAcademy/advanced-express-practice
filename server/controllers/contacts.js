let Contact = require("../models/contactModel")

exports.list =  function list(req, res) {
   Contact.find((err,c)=>{
       return res.json(c);
   });
}
exports.show = function show(req, res) {
   Contact.findById(req.params.id, (err,c)=>{
       return res.json(c);
   });
}
exports.create =  function create(req, res) {
    const newContact = new Contact({
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar
    })
    newContact.save().then(savedContact=>{
        console.log(savedContact)
    })    
}