const products = require('../products');

// get request
exports.list = function list(request, response) {
  return response.json(products);
};
// get by id request
exports.show = function show(request, response) {
  const product = products.find(p=>p._id == request.params.id);
  return response.json(product);
};

// post request
exports.create = function create(request, response) {
  const product = request.body;
  products.push(product);
  return response.json(product);
};

// put request
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};

// delete request
exports.remove = function remove(request, response) {
  return response.json({});
};
