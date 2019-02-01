let products = require("../products");

exports.list = function list(request, response) {
    return response.json(products);
}
//get with a specific id path
exports.show = function show(request, response) {
    let product = products.filter(p => p._id === Number(request.params.id));
    response.json(product);
}
//post request
exports.create = function create(request, response) {
    return response.json({});
}
exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}
//delete request
exports.remove = function remove(request, response) {
    return response.json({});
}