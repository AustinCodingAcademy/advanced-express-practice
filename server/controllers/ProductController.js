const products = require("../products");


exports.list = function list(request, response) {
  return response.json(products);
}
exports.show = function show(request, response) {
  return response.json(products.find(product => {return request.params.id==product["_id"]}));
}
exports.create = function create(request, response) {
  const tempBody = request.body
  tempBody["_id"]=Number(products[products.length-1]["_id"])+1
  products.push(tempBody)
  return response.json(products);
}
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
}
exports.remove = function remove(request, response) {
  return response.json({});
}