const ProductModel = require("../models/ProductModel");
// .get products
module.exports.list = (req, res) => {
   ProductModel.find({}).exec().then(products => {
      return res.json(products);
   })
   .catch(err => {
      console.log("Error listing products", err);
      return res.json(err);
   })
}

// .get product by ID
module.exports.show = (req, res) => {
   let product = ProductModel.findById(req.params.id).exec()
   .then(product => {
      return res.json(product);
   });
}

// .post new product
module.exports.create = (req, res) => {
   // instantiating new instance of ProductModel class
   // using req.body data to fill in values for vehcile schema
   const product = new ProductModel(req.body);
   // add new product to products array
   product.save();
   // return array with added product
   return res.json(product);
}

// .put product by ID
module.exports.update = (req, res) => {
   ProductModel.findById(req.params.id).exec().then(product => {
      product.name = "rubber duck",
      product.description = "bath/pool toy that squeeks";
      product.save();
      return res.json(product);
   })
}
// .delete contact by ID
module.exports.remove = (req, res) => {
   ProductModel.findById(req.params.id).exec().then(product => {
       product.active = false;
       product.save();
       return res.json(product);
   });
}