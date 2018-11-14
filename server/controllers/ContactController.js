const ContactModel = require("../models/ContactModel");
// .get contacts
module.exports.list = (req, res) => {
   ContactModel.find({}).exec().then(contacts => {
      return res.json(contacts);
   })
   .catch(err => {
      console.log("Error listing contacts", err);
      return res.json(err);
   }) 
}

// .get contact by ID
module.exports.show = (req, res) => {
   let contact = ContactModel.findById(req.params.id).exec()
   .then(contact => {
      return res.json(contact);
   });
}

// .post new contact
module.exports.create = (req, res) => {
   // instantiating new instance of ContactModel class
   // using req.body data to fill in values for vehcile schema
   const contact = new ContactModel(req.body);
   // add new contact to contacts array
   contact.save();
   // return array with added contact
   return res.json(contact);
}

// .put contact by ID
module.exports.update = (req, res) => {
   ContactModel.findById(req.params.id).exec().then(contact => {
      contact.name = "Jeff",
      contact.occupation = "trucker",
      contact.avatar = "duck";
      contact.save();
      return res.json(contact);
   })
}
// .delete contact by ID
module.exports.remove = (req, res) => {
   ContactModel.findById(req.params.id).exec().then(contact => {
       contact.active = false;
       contact.save();
       return res.json(contact);
   });
}