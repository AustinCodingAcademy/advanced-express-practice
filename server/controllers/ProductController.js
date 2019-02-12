const Product = require("../models/ProductModel");

exports.list = function list(request, response) {
  Product.find(function (err, products) {
    if (err) return console.error(err)        
    return response.json(products)
  })}
exports.show = function show(request, response) {
  Product.findById(request.params.id,function (err, products) {
    if (err) return console.error(err)        
    return response.json(products)
  })}
exports.create = function create(request, response) {
  const tempBody = request.body
  const newProduct = new Product({
    name: tempBody.name,
    description: tempBody.description,
  });
  newProduct.save(function (err, products) {
    if (err) return console.error(err)        
    return response.json(products)
  })
}
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
}
exports.remove = function remove(request, response) {
  return response.json({});
}