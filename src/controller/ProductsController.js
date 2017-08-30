import products from "../products";

export function list(request, response) {
  return response.json(products);
}

export function show(request, response) {
  const oneProduct = products.find(product => {
    return product.id === request.params.id;
  });
  return response.json(oneProduct);
}

export function create(request, response) {
  products.push(request.body);
  return response.json(products);
}
