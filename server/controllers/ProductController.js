let products = require("../products");

module.exports.list = function list(req, res) {
    return res.json(products);
}

module.exports.show = function show(req, res) {
    res.json(products.find(user=>user._id == req.params.id));
}

module.exports.create = function create (req, res) {
    const newProduct = req.body;
    products.push(newProduct);
    return res.json(newProduct);
}