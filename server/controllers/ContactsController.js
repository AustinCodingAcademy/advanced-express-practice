import contacts from "../contacts";

export function list(request, response) {
  return response.json(contacts);
}

export function show(request, response) {
  let contactId = request.params.id;

  return response.json(contacts.find(c => c._id == contactId) || {});
}

export function create(request, response) {
  contacts.push(request.body);
  return response.json(contacts);
}
