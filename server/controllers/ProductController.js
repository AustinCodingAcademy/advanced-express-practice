const productModel = require("../models/productModel");

module.exports.list = function list(request, response) {
  productModel.find({}).exec()
 .then(products => {
   response.json(products);
 });
};


module.exports.show = function show(request, response) {
  productModel.findById(request.params.id).exec()
  .then(product => {
    response.json(product);
  });
};
 
module.exports.create = function create(request, response) {
  const newProduct = new productModel(request.body);
  newProduct.save()
  .then(savedProduct => {
    response.json(savedProduct);
  });
 
};
