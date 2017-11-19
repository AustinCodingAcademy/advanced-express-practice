import products from '../products';

export function list(request, response) {
  return response.json(products);
}
export function show(request, response) {
  const contactId = products.find(product => product._id === request.params.id);
  return response.json(contactId);
}
export function create(request, response) {
  products.push(request.body);
  return response.json({});
}
export function update(request, response) {
  return response.json({ theId: request.params.id });
}
export function remove(request, response) {
  return response.json({});
}
