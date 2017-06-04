
import ContactModel from "../models/ContactModel";

export function list(req, res) {
  ContactModel.find({}).exec()
 .then(contacts => {
   return res.json(contacts);
 });
}

export function create(req, res) {
  const contact = new ContactModel({
  name: req.body.name,
  occupation: req.body.occupation,
  avatar: req.body.avatar
});
  contact.save()
   .then(con => {
     return res.json(con);
   });
}

export function show(req, res) {
  ContactModel.findById(req.params.id).exec()
   .then(contact => {
     return res.json(contact);
   });
}


// GEt -> list
// Get /:id -> show
// POST -> Create
// Put/:id -> update
// Delete /:id -> remove
