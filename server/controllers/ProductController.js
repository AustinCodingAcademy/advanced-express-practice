const ProductModel = require("../models/ProductModel.js");


module.exports.list =  function list(req, res) {
  return ProductModel.find({}).exec().then(products => res.json(products));
};
module.exports.show = function show(req, res) {
  return ProductModel.findById(req.params.id).exec().then(product => res.json(product)); 
};
module.exports.create = function create(req, res) {
  const newProduct = new ProductModel(req.body);
  newProduct.save().then(savedProduct => res.json(savedProduct));
};
// module.exports.update = function update(request, response) {
//   return response.json({theId: request.params.id});
// }
// module.exports.remove = function remove(request, response) {
//   return response.json({});
// }
