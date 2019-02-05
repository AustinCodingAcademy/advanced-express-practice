const products = require("../products");



exports.list =  function list(request, response) {
  return response.json(products);
}
exports.show = function show(request, response) {
  return response.json(products.find(product =>{
    return request.params.id == product[`_id`];
  }));
    
}
exports.create =  function create(request, response) {
  const product = request.body;
  products.push(product);
  return response.json(product);  
}

exports.update =  function update(request, response) {
  return response.json({theId: request.params.id});
}

exports.remove =  function remove(request, response) {
  return response.json({});
}
