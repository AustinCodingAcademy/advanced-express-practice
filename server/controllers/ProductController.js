const Product = require("../model/Product");

module.exports.list = function (request, response) {
  Product.find({})
    .exec()
    .then((products) => {
      return response.json(products);
    });
};
module.exports.show = function (request, response) {
  Product.findById({
    _id: request.params.id,
  })
    .exec()
    .then((product) => {
      return response.json(product);
    });
};
module.exports.create = function (request, response) {
  const newContact = new Product(request.body);
  newContact.save().then((product) => {
    return response.json(product);
  });
};
module.exports.update = function (request, response) {
  const product = new Product(request.body);
  product.save().then((saved) => {
    return response.json(saved);
  });
};
module.exports.remove = function (request, response) {
  Product.findByIdAndRemove(request.params.id);
  return response.send("deleted");
};
