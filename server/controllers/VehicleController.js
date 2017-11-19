import vehicles from '../vehicles';

export function list(request, response) {
  return response.json(vehicles);
}
export function show(request, response) {
  const contactId = vehicles.find(vehicle => vehicle._id === request.params.id);
  return response.json(contactId);
}
export function create(request, response) {
  vehicles.push(request.body);
  return response.json({});
}
export function update(request, response) {
  return response.json({ theId: request.params.id });
}
export function remove(request, response) {
  return response.json({});
}
