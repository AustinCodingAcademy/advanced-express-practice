import products from "../products";
import ProductModel from "../models/ProductModel";

export function list(request, response) {
  return response.json(products);
}
export function show(request, response) {
  let someProduct = request.params.id;
  let oneProduct = products.find(function(product){
  return someProduct == products._id;
  response.json(someProduct);
});
}
export function create(request, response) {
  products.push(request.body)
  return response.json({
    name:request.name.description,
    description:request.body.description
  });
}
export function update(request, response) {
  return response.json({theId: request.params.id});
}
export function remove(request, response) {
  return response.json({});
}
