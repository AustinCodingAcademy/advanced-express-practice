let products = require("../products.js")

exports.list =  function list(request, response) {
    return response.json(products);
}
exports.show = function show(request, response) {
    let productId =  Number(request.params.id)
    products.find((aProduct) => {
        if (aProduct._id === productId) {
            return response.json(aProduct)
        }
    })
}
exports.create =  function create(request, response) {
    oldId = products[products.length - 1]._id
    let body  = request.body
    body._id = oldId + 1
    products.push(body)
    return response.json(body);
}
exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
    return response.json({});
}
