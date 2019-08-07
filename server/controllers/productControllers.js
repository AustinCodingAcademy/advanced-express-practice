const Product = require("../models/productsModel");

exports.create = function create(req, res) {
  let item = {
    name: req.body.name,
    description: req.body.description
  };
  let newProduct = new Product(item);
  newProduct.save();
};

exports.list = function list(req, res) {
  Product.find((e, v) => {
    return res.json(v);
  });
};

exports.show = function show(req, res) {
  Product.findById(req.params.id, (err, v) => {
    return res.json(v);
  });
};

// let products = require("../../products");

// exports.list = function(req, res, next) {
//   return res.json(products);
// };

// exports.show = function show(req, res) {
//   let id = req.params.id;
//   let productsID = products.find(p => p["_id"] == id);
//   console.log(id);
//   console.log(productsID);
//   return res.json(productsID);
// };

// exports.create = function(req, res) {
//   let product = req.body;
//   products.push(product);
//   return res.json(products);
// };
