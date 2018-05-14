const mongoose = require('mongoose');
const contacts = require("../contacts");
let ContactModel = require('../models/ContactsModels.js')


//defined what each http command will do
// module.exports.list =  function list(request, response) {
//     return response.json(contacts);
// }

// module.exports.show =  function show(request, response) {
//     return response.json(contacts.find(user => user._id == request.params.id));
// }

// module.exports.create =  function create(request, response) {
//     const newContact = request.body;
//     contacts.push(newContact);
//     return response.json(newContact);
// }

// module.exports.update =  function update(request, response) {
//     const editContact = request.body
//     return response.json(editContact);
// }

// module.exports.remove =  function remove(request, response) {
//     return response.json(contacts.pop(user => user._id == request.params.id))
// }   

ContactModel.find({}).exec()
.then(contacts => {
  console.log(contacts);
});

ContactModel.findById(request.params.id).exec()
.then(conact => {
 console.log(contact);
});

const newContact= new ContactModel(request.body);
newContact.save()
.then(savedContact => {
  response.json(savedContact);
});

ContactModel.findById(request.params.id).exec()
.then(contact => {
  contact.name = request.body.name || contact.name;
  contact.occupation = request.body.occupation || contact.occupation;
  contact.avatar = request.body.avatar ||contact.avatar;
  return contact.save();
})
.then(contact => {
  response.json(contact);
});