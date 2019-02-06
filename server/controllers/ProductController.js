var products = require("../../products");


exports.list = function list(request, response) {
  return response.json(products);
}
exports.show = function show(request, response) {
  return response.json( products.find(comment => {return request.params.id == comment["_id"]}) );
}
exports.create = function create(request, response) {  
  let tempBody = request.body;
  tempBody["_id"] = products.length + 1;
  products.push(tempBody);
  return response.json(products);
}
