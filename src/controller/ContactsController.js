import contacts from "../contacts";
import ContactModel from "../models/ContactModel";

export function list(request, response) {
  ContactModel.find({}).exec()
  .then(contacts => {
    return response.json(contacts);
  });
}

export function show(request, response) {
  ContactModel.findById(request.params.id).exec()
  .then(oneContact => {
    return response.json(oneContact);
  });
}

export function create(request, response) {

  const contact = new ContactModel({
    name: request.body.name,
    occupation: request.body.occupation,
    avatar: request.body.avatar
  });

  contact.save()
  .then(contact => {
    return response.json(contact);
  });

}
