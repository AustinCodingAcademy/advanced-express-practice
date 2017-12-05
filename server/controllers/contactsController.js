import contacts from "../contacts";
import ContactsModel from "../models/ContactsModel"

export function list(request, response) {
  ContactsModel.find({}).exec()
  .then(contacts => {
    return response.json(contacts)
  });
}
  export function show(request, response) {
    let id = request.params.id;
    ContactsModel.findById(id).exec()
    .then(contact => {
      return response.json(contact);
    });
  }
    export function create(request, response) {
     const contact = new ContactsModel(request.body);
     contact.save()
     .then(contact => response.json(contact));
  }
  
  export function update(request, response) {
    return response.json(contacts[0].name = request.params.id);
  }
  
  export function remove(request, response) {
    return response.json(contacts.pop());
  }