const Product = require("../models/ProductModel");

exports.list = function list(request, response) {
    Product.find(function (err, products) {
        if (err) return console.error(err);
        return response.json(products)
      });
};
exports.show = function show(request, response) {
    Product.findById(request.params.id, function(err, products){
        return response.json(products)
    })
    // const productId = products.find(product => {return request.params.id == product["_id"] })
    // return response.json(productId);
};
exports.create = function create(request, response) {
    const productBody = request.body;
    const newProduct = new Product({productBody});
    newProduct.save(function (err, newProduct) {
        if (err) return console.error(err);
        return response.json(newProduct)
      });
    // productBody["_id"] = products.length + 1;
    // products.push(productBody);
    // return response.json(products);
};
exports.update = function update(request, response) {
    return response.json({theId: request.params.id});
};
exports.remove = function remove(request, response) {
    return response.json({});
}; 
   