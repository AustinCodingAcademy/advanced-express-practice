let products = require("../../products");

exports.list = function(req, res, next) {
  return res.json(products);
};

exports.show = function show(req, res) {
  let id = req.params.id;
  let productsID = products.find(p => p["_id"] == id);
  console.log(id);
  console.log(productsID);
  return res.json(productsID);
};

exports.create = function(req, res) {
  let product = req.body;
  products.push(product);
  return res.json(products);
};
