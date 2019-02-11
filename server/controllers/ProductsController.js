const Product = require("../models/ProductModel");

exports.list = function list(request, response) {
    Product.find().exec().then((products)=>{
        return response.json(products);
    })
}

exports.show = function show(request, response) {
    Product.findById(request.params.id).exec().then((product)=> {
        return response.json(product);
    })
}

exports.create =  function create(request, response) {
    const newProduct = new Product({
        name: request.body.name,
        description: request.body.description
    })
    newProduct.save().then(savedProduct=>{
        console.log(savedProduct)
    })    
}

exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}

exports.remove =  function remove(request, response) {
    return response.json({});
}