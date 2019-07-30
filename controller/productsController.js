const Product = require('../server/schemas/productsSchema')

exports.create = function(req,res) {
  let item = {
    name: req.body.name,
    description: req.body.description
  };
  let newProduct = new Product(item)
  newProduct.save();
}

exports.list = function(req,res) {
  Product.find()
    .then(function(doc) {
      res.render('index:', {items: doc});
    })
}

// exports.list = function(req,res) {
//   Product.find(function (err, products) {
//     if (err) return console.error(err);
//     console.log(products);
//     })
//     res.json(products)
// }

// const {getDatabase} = require("../server/database");

// exports.create = function(req,res) {
//     let db = getDatabase();
//     // Get the documents collection
//     let collection = db.collection('products');
//     // Insert some documents
//     collection.insertMany(req.body, function() {
//       res.json(req.body)
//     });
// }