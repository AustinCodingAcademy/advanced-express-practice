let products = require("../products");
let idCount = 10;

module.exports.list = function list(req, res, next) {
    return res.json(products)
}
module.exports.show = function show(req, res, next) {
    let prodID = products.find((item) => { return item._id == req.params.id })
    return res.json(prodID)
}
module.exports.create = function create(req, res, next) {
    idCount++;
    let newProd = {
        _id: idCount,
        name: req.body.name,
        description: req.body.description,
    }
    products.push(newProd);
    return res.json(products);
}
module.exports.update = function update(request, response, next) {
    return response.json({theId: request.params.id});
}
module.exports.remove = function remove(request, response, next) {
    return response.json({});
}
   