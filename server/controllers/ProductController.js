const Product = require("../models/ProductModel");

function list(req, res) {
  Product.find()
    .exec()
    .then(result => {
      return res.json(result);
    });
}

function show(req, res) {
  Product.findById(req.params.id)
    .exec()
    .then(result => {
      return res.json(result);
    });
}

function create(req, res) {
  const newProduct = new Product(req.body);
  newProduct.save().then(savedProduct => {
    res.json(savedProduct);
  });
}

module.exports = {
  list,
  show,
  create
};
