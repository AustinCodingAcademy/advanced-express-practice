import products from "../products";

export function list(request, response) {
  return response.json(products);
}

export function show(request, response) {
  let productId = request.params.id;

  function findProduct(product) {
    return product.id === productId;
  }

  return response.json(products.find(findProduct));
}

export function create(request, response) {
  products.push(request.body);
  return response.json(products);
}
