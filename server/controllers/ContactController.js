import contacts from "../contacts";
import ContactModel from "../models/ContactModel";

export function list(request, response) {
  ContactModel.find({})
    .exec()
    .then(contacts => {
      return response.json(contacts);
    });
}

export function show(request, response) {
  ContactModel.findById(request.params.id)
    .exec()
    .then(contact => {
      return response.json(contact);
    });
}

export function create(request, response) {
  const contact = new ContactModel(request.body);
  contact.save().then(contact => response.json(contact));
}

export function update(request, response) {
  return response.json((contacts[0].name = request.params.id));
}
export function remove(request, response) {
  return response.json(contacts.pop());
}
