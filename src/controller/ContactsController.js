import contacts from "../contacts";

export function list(request, response) {
  return response.json(contacts);
}

export function show(request, response) {
  const oneContact = contacts.find(contact => {
    return contact.id === request.params.id;
  });
  return response.json(oneContact);
}

export function create(request, response) {
  contacts.push(request.body);
  return response.json(contacts);
}
