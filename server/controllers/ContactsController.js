import contacts from "../contacts";

export function list(request, response) {
  return response.json(contacts);
}

export function show(request, response) {
  let contactId = request.params.id;

  function findContact(contact) {
    return contact.id === contactId;
  }

  return response.json(contacts.find(findContact));
}

export function create(request, response) {
  contacts.push(request.body);
  return response.json(contacts);
}
