let products = require("../products");

exports.list =  function list(request, response) {
    return response.json(products);
}
exports.show = function show(request, response) {
    return response.json({theId: request.params.id});
}
exports.create =  function create(request, response) {
    return response.json({});
}
exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
    return response.json({});
}
   