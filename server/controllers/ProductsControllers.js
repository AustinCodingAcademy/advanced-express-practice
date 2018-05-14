const mongoose = require('mongoose');
const products = require("../products");
let ProductModel = requre('../models/ProductsModels.js')


//defined what each http command will do
// module.exports.list =  function list(request, response) {
//     return response.json(products);
// }

// module.exports.show =  function show(request, response) {
//     return response.json(products.find(user => user._id == request.params.id));
// }

// module.exports.create =  function create(request, response) {
//     const newProduct = request.body;
//     comments.push(newProduct);
//     return response.json(newProduct);
// }

// module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
// }

// module.exports.remove =  function remove(request, response) {
//     return response.json(products.pop(user => user._id == request.params.id))
// }   

ProductModel.find({}).exec()
.then(products => {
  console.log(products);
});

ProductModel.findById(request.params.id).exec()
.then(product => {
 console.log(product);
});

const newProduct= new ProductModel(request.body);
newProduct.save()
.then(savedProduct => {
  response.json(savedProduct);
});

ProductModel.findById(request.params.id).exec()
.then(product => {
  product.name = request.body.name || product.name;
  product.description = request.body.description || product.description;
  return product.save();
})
.then(product => {
  response.json(product);
});