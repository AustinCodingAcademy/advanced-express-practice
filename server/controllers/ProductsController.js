//const products = require("../products");
const Product = require("../models/Product");

function list(request, response) {
    Product.find({}).exec()
    .then(products => {
        return response.json(products); 
    });
}

function show(request, response) {
    Product.findById(request.params.id).exec()
    .then(product => {
      return response.json(product);
    });
}

function create(request, response) {
    const product = new Product({
        name: request.body.name,
        description: request.body.description,
    });
    product.save()
    .then(products => {
      return response.json(products);
    });
}

module.exports = {
    list,
    show,
    create
}

/*export function update(request, response) {
    return response.json({theId: request.params.id});
}

export function remove(request, response) {
    return response.json({});
}*/