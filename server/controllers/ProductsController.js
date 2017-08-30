import products from "../products";

export function list(request, response) {
 return response.json(products);
}
export function show(request, response) {
 return response.json({theId: request.params.id});
}
export function create(request, response) {
  products.push(request.body);
 return response.json({
   name: request.body.name,
   description: request.body.description
 });
}
export function update(request, response) {
 return response.json({theId: request.params.id});
}
export function remove(request, response) {
 return response.json({});
}
