import contacts from "../contacts.js";

export const list = (request, response) => {
  return response.json(contacts);
}

export const show = (request, response) => {
  return response.json(contacts.find(contact => contact._id == request.params.id));
}

export const create = (request, response) => {
  return response.json(contacts.push(request.body));
}
