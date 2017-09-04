// import contacts from "../contacts";
import ContactModel from "../models/ContactModel";

//GET => List
export function list(request, response) {
  ContactModel.find({}).exec()
  .then(contacts => {
    return response.json(contacts);
  });
}

//GET/:id => Show
export function show(request, response) {
 ContactModel.findById(request.params.id).exec()
 .then(contact => {
   return response.json(contact);
 });
}

//POST => Create
export function create(request, response) {
  const contact = new ContactModel({
    name: request.body.name,
    occupation: request.body.occupation,
    avatar: request.body.avatar,
  });
  contact.save()
  .then(contact => {
    return response.json(contact);
  });
}

//PUT/:id => Update
export function update(request, response) {
 ContactModel.findById(request.params.id).exec()
 .then(contact => {
   contact.name = request.body.name || contact.name;
   contact.occupation = request.body.occupation || contact.occupation;
   contact.avatar = request.body.avatar || contact.avatar;
   return contact.save();
 })
 .then(contact => {
   return response.json(contact);
 })
}

//DELETE/:id => Remove
export function remove(request, response) {
 return response.json({});
}
