import contacts from "../contacts.js";
import Contact from "../models/contacts";

// function to get the list of contacts.
export const list = (request, response) => {
  Contact.find({}).exec()
  .then(contacts => {
    return response.json(contacts);
  });

  // return response.json(contacts);
}

// function to get details of one contact
export const show = (request, response) => {

  Contact.findById(request.params.id).exec()
  .then(contact => {
    return response.json(contact);
  });

  // return response.json(contacts.find(contact => contact._id == request.params.id));
}

// function to create a contact
export const create = (request, response) => {

  const contact = new Contact(request.body);
  contact.save()
  .then(c => {
    return response.json(c);
  });

  // return response.json(contacts.push(request.body));
}
