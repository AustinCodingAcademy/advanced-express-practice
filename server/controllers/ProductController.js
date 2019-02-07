let products = require("../products");

exports.list = function list(request, response) {
    return response.json(products);
};
exports.show = function show(request, response) {
    const productId = products.find(product => {return request.params.id == product["_id"] })
    return response.json(productId);
};
exports.create = function create(request, response) {
    const productBody = request.body;
    productBody["_id"] = products.length + 1;
    products.push(productBody);
    return response.json(products);
};
exports.update = function update(request, response) {
    return response.json({theId: request.params.id});
};
exports.remove = function remove(request, response) {
    return response.json({});
}; 
   