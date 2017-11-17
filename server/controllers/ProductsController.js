import products from "../products";
/*
GET -> list
GET /:id -> show
POST -> create
PUT /:id -> update
DELETE /:id -> remove
*/
export function list(request, response) {
  return response.json(products);
}
export function show(request, response) {
  return response.json({theId: request.params.id});
}
export function create(request, response) {
  products.push(request.body);
  return response.json(products);
}
export function update(request, response) {
 return response.json({theId: request.params.id});
}
export function remove(request, response) {
 return response.json(products);
}
