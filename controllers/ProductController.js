let Product = require("../models/ProductModel.js")
var ObjectId = require('mongodb').ObjectID;

exports.list =  function list(request, response) {
    Product.find(function (err, products) {
        if (err) return console.error(err);
        return response.json(products)
    })
    
}
exports.show = function show(request, response) {
    let productId =  ObjectId(request.params.id)
    Product.findById(productId, function(err, product) {
        if (err) return console.error(err)
        return response.json(product)
    })
}
exports.create =  function create(request, response) {
    let body  = request.body
    let product = new Product( { name: body.name, description: body.description} )
    product.save(function (err, comment) {
        if (err) return console.error(err);
    });
    return response.json(body);

}
exports.update =  function update(request, response) {
    
}
exports.remove =  function remove(request, response) {
    
}
