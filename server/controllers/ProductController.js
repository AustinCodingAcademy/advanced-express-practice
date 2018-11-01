const products = require("../products");
let productIdCount = products.length; 
// .get products
module.exports.list = function list(req, res) {
   return res.json(products);
}
// .get product by ID
module.exports.show = function show(req, res) {
   let product = products.find((product) => product._id == req.params.id);
   return res.json(product);
}
// .post new product
module.exports.create = function create(req, res) {
   productIdCount++
   const newProduct = {
      _id: productIdCount,
      name: req.body.name,
      occupation: req.body.occupation
   }
   // add new product to products array
   products.push(newProduct);
   // return array with added product
   return res.json(products);
}
// .put product by ID
module.exports.update = function update(req, res) {
   return res.json({theId: req.params.id});
}
// .delete product by ID
module.exports.remove = function remove(req, res) {
   return res.json({});
}
  