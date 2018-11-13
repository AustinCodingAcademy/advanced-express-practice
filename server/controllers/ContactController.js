const ContactModel = require("../models/ContactModel");
// .get contacts
module.exports.list = (req, res) => {
   contactModel.find({}).exec().then(contacts => {
      return res.json(contacts);
   }) 
}

// .get contact by ID
module.exports.show = (req, res) => {
   let contact = contacts.find((contact) => contact._id == req.params.id);
   return res.json(contact);
}

// .post new contact
module.exports.create = (req, res) => {
   // instantiating new instance of ContactModel class
   // using req.body data to fill in values for vehcile schema
   const contact = new ContactModel(req.body);
   // add new contact to contacts array
   contact.save();
   // return array with added contact
   return res.json(contacts);
}

// .put contact by ID
module.exports.update = (req, res) => {
   ContactModel.findById(request.params.id).then((err, contact) => {
      if (err) return handleError(err);

      contact.name = "Jeff",
      contact.occupation = "trucker",
      contact.avatar = "duck";
      contact.save((err, updContact) => {
         if (err) return handleError(err);
         res.send(updContact);
      })
   })
}
// .delete contact by ID
module.exports.remove = function remove(req, res) {
   return res.json({});
}