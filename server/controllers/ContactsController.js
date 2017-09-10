// import contacts from "../contacts";
import ContactModel from "../models/ContactModel";

export function list(req, res) {
  ContactModel.find({}).exec()
 .then(contacts => {
   return res.json(contacts);
 });

  // return res.json(contacts);
}
export function show(req, res) {
  ContactModel.findById(req.params.id).exec()
 .then(contact => {
   return res.json(contact);
 });
  // let contactId = req.params.id;
  // let singleContact = contacts.find(function (contact) {
  //   return contactId == contact._id;
  // });
  // return res.json(singleContact);
}
export function create(req, res) {
  const contact = new ContactModel({
   name: req.body.name,
   occupation: req.body.occupation,
   avatar: req.body.avatar,
 });
 contact.save()
 .then(contact => {
   return res.json(contact);
 });
}
export function update(req, res) {
  UserModel.findById(request.params.id).exec()
   .then(user => {
     user.name = request.body.name || user.name;
     user.occupation = request.body.occupation || user.occupation;
     user.avatar = request.body.avatar || user.avatar;
     return user.save();
   })
   .then(contact => {
     return response.json(contact);
   });
}
export function remove(req, res) {
  return res.json({});
}
