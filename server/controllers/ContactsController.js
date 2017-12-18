import contacts from "../contacts";
import Contact from "../models/contacts";


export const list = (request, response) => {
  Contact.find({}).exec()
  .then(contacts => {
    return response.json(contacts);
  });
}

export const show = (request, response) => {
  Contact.findById(request.params.id).exec()
  .then(contact => {
    return response.json(contact);
  });
}

export const create = (request, response) => {
  const contact = new Contact(request.body);
  contact.save()
  .then(c => {
    return response.json(c);
  });
}
