import contacts from '../contacts';

export function list(request, response) {
  return response.json(contacts);
}
export function show(request, response) {
  const contactId = contacts.find(contact => contact._id === request.params.id);
  return response.json(contactId);
}
export function create(request, response) {
  contacts.push(request.body);
  return response.json({});
}
export function update(request, response) {
  return response.json({ theId: request.params.id });
}
export function remove(request, response) {
  return response.json({});
}
