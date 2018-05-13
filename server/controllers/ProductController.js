const ProductModel = require("../models/ProductModel");

module.exports.list = function list(req, res) {
  ProductModel.find({}).exec()
  .then(product => {
    res.json(product);
  });
};

module.exports.show = function show(req, res) {
  ProductModel.findById(req.params.id).exec()
  .then(product => {
    res.json(product);
  });
};

module.exports.create = function create(req, res) {
  const newProduct = new ProductModel(req.body);
  newProduct.save()
  .then(savedProduct => {
    res.json(savedProduct);
  });
};

