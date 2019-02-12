// let products = require("../products");
let Product = require("../models/ProductModel")

exports.list =  function list(request, response) {
    // return response.json(products);
    Product.find().exec().then(p=>{
        return response.json(p);
    });
}
exports.show = function show(request, response) {
    // let product = products.find(p=> p._id == request.params.id);
    // return response.json(product);
    Product.findById(request.params.id).exec().then(p=>{
        return response.json(p);
    });
}
exports.create =  function create(request, response) {
    // let newProduct = request.body
    // let idArray = [];
    // products.forEach(p => idArray.push(p._id));
    // newProduct._id = Math.max(...idArray) +1;
    // products.push(newProduct);
    // return response.json(newProduct);
    let newProduct = new Product({
        name: request.body.name,
        description: request.body.description
    });
    newProduct.save();
    return response.json(newProduct);
}
exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
    return response.json({});
}
