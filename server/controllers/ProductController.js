const products = require("../products");
const UserModel = require("./models/ProductModel");

UserModel.find({}).exec()
.then(product => {
  console.log(product);
});
module.exports.list = function list(req, res) {
  return res.json(products);
};

module.exports.show = function show(req, res) {
  res.json(products.find(user => user._id == req.params.id));
};

module.exports.create = function create(req, res) {
  const newProduct = req.body;
  products.push(newProduct);
  return res.json(newProduct);
};
