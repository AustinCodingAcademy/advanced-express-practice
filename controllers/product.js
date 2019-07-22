let products = require('../products');

exports.list = function list(request, response) {
    return response.json(products);
}

exports.show = function show(request, response) {
    let product = products.find(x => x._id == request.params.productId);
    response.json(product);
}

exports.create = function create(request, response) {
    let newProduct = request.body;
    products.push(newProduct);
    response.json(newProduct);
}

exports.update = function update(request, response) {
    let product = products.find(x => x._id == request.parameters.productId);
    product.name = body.name;
    product.description = body.description;
    response.json(product);
}

exports.remove = function remove(reqeust, response) {
    let product = product.find(x => x._id == request.params.productId);
    product.isActive = false;
    response.send('deleted');
}