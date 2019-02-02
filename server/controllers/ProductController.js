let products = require("../products");

// GET request
exports.list = function list(request, response) {
    return response.json(products);
}

// GET with an ID
exports.show = function show(request, response) {
    return response.json(products[request.params.id - 1]);
}

// POST request
exports.create = function create(request, response) {
    const newProduct = request.body;
    newProduct["_id"] = products.length + 1;
    products.push(newProduct);
    return response.json(products);
}

// PUT request
exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}

// DELETE request
exports.remove = function remove(request, response) {
    return response.json({});
}