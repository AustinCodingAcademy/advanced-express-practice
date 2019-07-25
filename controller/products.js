let products = require("../products");

exports.list = function list(req, res) {
    res.json(products)
}

exports.show = function show(req, res) {
    let product = products.find(p=>p._id == req.params.idNum);
    res.json(product)
}

exports.create = function create(req, res) {
    let newProduct = req.body;
    products.push(newProduct);
    res.json(newProduct)
}

exports.update = function update(req, res) {
    let product = products.find(p=>p._id == req.params.idNum);
    product.make = body.make;
    res.json(product)
}

exports.remove = function remove(req, res) {
    let product = products.find(p=>p._id == req.params.idNum);
    product.isActive = false;
    res.send("deleted")
}