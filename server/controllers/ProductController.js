let products = require("../products");

exports.list =  function list(request, response) {
 return response.json(products);
}
exports.show = function show(request, response) {
 const getId = request.params.id;   
 return response.json(products[getId -1]);
}
exports.create =  function create(request, response) {
 const newProduct = request.body;
 newProduct._id = products.length+1;
 products.push(newProduct);
 return response.json(products);
}
exports.update =  function update(request, response) {
 return response.json({});
}
exports.remove =  function remove(request, response) {
 return response.json({});
}