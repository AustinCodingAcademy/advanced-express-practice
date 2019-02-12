
const Product = require("../models/ProductModel");

exports.list =  function list(request, response) {
    const query =Product.find();
    query.exec((err, products) => {
        if (err) return console.error(err);
        return response.json(products);
    })    
}

exports.show = function show(request, response) {
    const getId = request.params.id
    Product.findById(getId, (err, products) => {
        return response.json(products);
    })
}

exports.create =  function create(request, response) {
    const newInfo = request.body;
    const newProduct = new Product(newInfo);
    newProduct.save((err,products) => {
        if (err) return console.error(err);
        return response.json(products);
    })
    
}
exports.update =  function update(request, response) {
 return response.json({});
}
exports.remove =  function remove(request, response) {
 return response.json({});
}