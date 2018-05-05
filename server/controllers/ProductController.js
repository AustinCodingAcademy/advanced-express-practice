let products = require("../products.js");


module.exports.list =  function list(req, res) {
  return res.json(products);
};
module.exports.show =  function show(req, res) {
  return res.json(products.find(product => product._id == req.params.id));
};
module.exports.create =  function create(req, res) {
  const newProduct = req.body;
  newProduct._id = (products.length + 1);
  products.push(newProduct);
  res.json(newProduct);
};