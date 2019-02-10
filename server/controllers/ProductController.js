let productsModel = require("../Models/products");

// GET request
exports.list = function list(request, response) {
    productsModel.find().exec().then((products)=>{
        return response.json(products);
    })
}

// GET with an ID
exports.show = function show(request, response) {
    productsModel.findById(request.params.id).exec().then((product) => {
        return response.json(product);
    })
}

// POST request
exports.create = function create(request, response) {
    const newProduct = new productsModel({
        name: request.body.name,
        description: request.body.description
    })
    newProduct.save.then(savedProduct => {
        console.log(savedProduct)
    })
}

// PUT request
exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}

// DELETE request
exports.remove = function remove(request, response) {
    return response.json({});
}