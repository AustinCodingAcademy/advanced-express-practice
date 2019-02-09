// const products = require('../products');
const Product = require("../models/ProductModel");

// get request
module.exports.list = (request, response) => {
  Product.find({}).exec().then((products) => {
    return response.json(products);
  });
};
// get by id request
module.exports.show = (request, response) => {
  Product.findById(request.params.id).exec().then((product) => {
    return response.json(product);
  });
  // hardcoded files:
  // const product = products.find(p=>p._id == request.params.id);
  // return response.json(product);
};

// post request
module.exports.create = (request, response) => {
  const p = new Product({
    name: request.body.name,
    description: request.body.description
  });
  p.save().then(saveP => {
    return response.json(saveP);
  });
  // hardcoded:
  // const product = request.body;
  // products.push(product);
  // return response.json(product);
};

// put request
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};

// delete request
exports.remove = function remove(request, response) {
  return response.json({});
};
