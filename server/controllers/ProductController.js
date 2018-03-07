import products from "../products.js"

export function list(request, response) {
 return response.json(products);
}
export function show(request, response) {
 return response.json(products.find((c)=>c._id==request.params.id));
}
export function create(request, response) {
  let newProduct = request.body;
  products.push(newProduct);
  return response.json(newProduct);
}
// export function update(request, response) {
//  return response.json({theId: request.params.id});
// }
// export function remove(request, response) {
//  return response.json({});
// }
