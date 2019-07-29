    
const {getDatabase} = require("../server/database");

exports.list = function(req,res) {
    let db = getDatabase();
    const collection = db.collection('products');
    // Find some documents
    let found = collection.find({});
    found.toArray(function(err, products) {
      res.json(products)
    });
}






// let products = require("../products");

// exports.list = function list(req, res) {
//     res.json(products)
// }

// exports.show = function show(req, res) {
//     let product = products.find(p=>p._id == req.params.idNum);
//     res.json(product)
// }

// exports.create = function create(req, res) {
//     let newProduct = req.body;
//     products.push(newProduct);
//     res.json(newProduct)
// }

// exports.update = function update(req, res) {
//     let product = products.find(p=>p._id == req.params.idNum);
//     product.make = body.make;
//     res.json(product)
// }

// exports.remove = function remove(req, res) {
//     let product = products.find(p=>p._id == req.params.idNum);
//     product.isActive = false;
//     res.send("deleted")
// }