import products from "../products";

export function list(request, response) {
  return response.json(products);
}

export function show(request, response) {
  let productId = request.params.id;

  return response.json(products.find(p => p._id == productId) || {});
}

export function create(request, response) {
  products.push(request.body);
  return response.json(products);
}
