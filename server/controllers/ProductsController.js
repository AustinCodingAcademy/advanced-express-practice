import products from "../products";
/*
GET -> list
GET /:id -> show
POST -> create
PUT /:id -> update
DELETE /:id -> remove
*/
export function listProduct(request, response) {
  return response.json(products);
}

/*
export function showProduct(request, response) {
  const productId = request.params.id;
  const thisProduct = products.find(prod => prod.id == productId) || {};
  return response.json(thisProduct);
}
*/

export function showProduct(request, response) {
  const productId = products.find(product => {
    return String(product._id) === request.params.id;
  });

  return response.json(productId);
}

export function createProduct(request, response) {
  products.push(request.body);
  // alert("Success! Your new product was saved.")
  return response.json(products);
}

// FUNCTIONS BELOW NOT UPDATED
export function updateProduct(request, response) {
  return response.json({theId: request.params.id});
}

export function removeProduct(request, response) {
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
