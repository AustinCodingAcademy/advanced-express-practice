const Product = require("../models/ProductModel");

// GET request
exports.list = function list(request, response) {
    Product.find().exec().then((products) => {
        return response.json(products);
    });
}

// GET with an ID
exports.show = function show(request, response) {
    Product.findById(request.params.id).exec().then((product) => {
        return response.json(product);
    });
};

// POST request
exports.create = function create(request, response) {
    const newProduct = new Product(
        request.body
    );
    newProduct.save().then(savedProduct => {
        response.json(savedProduct);
    });
};
