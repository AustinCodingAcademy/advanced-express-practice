import products from "../products";

export function list(request, response) {
    response.json(products);
  }
export function show(request, response) {
  let id = request.params.id;
  console.log(id);
  let product = products.find(product => product._id == id) || {};
  return response.json(product);
}
  
export function create(request, response) {
    products.push(request.body);
}  

export function update(request, response) {
  return response.json(products[0].name = request.params.id);
}
export function remove(request, response) {
  return response.json(products.pop());
}