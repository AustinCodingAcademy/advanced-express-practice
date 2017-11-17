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
  const productId = request.params.id;
  const thisProduct = products.find(prod => prod.id == productId) || {};
  return response.json(thisProduct);
}

export function create(request, response) {
  products.push(request.body);
  return response.json(products);
}

// FUNCTIONS BELOW NOT UPDATED
export function update(request, response) {
  return response.json({theId: request.params.id});
}

export function remove(request, response) {
  return response.json(products);
}

// Alternate 'show' functions
/*
export function show(request, response) {
  return response.json({theId: request.params.id});
}

export function show(request, response) {
  const productId = request.params.id;
  // use this id to get from a database
  products.findById(productId);
});

export function show(request, response) {
  const productId = request.params.id;
  // use this id to get from a database
  const thisProduct = products.findById(productId);
  response.json(thisProduct);
});

*/
