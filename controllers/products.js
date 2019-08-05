const { getDatabase } = require("../database");

exports.list = function (req, res) {
    let db = getDatabase();
    const collection = db.collection('products');
    let found = collection.find({});
    found.toArray(function (err, products) {
        res.json(products)
    })
}

exports.create = function (req, res) {
    let db = getDatabase();
    const collection = db.collection('products');
    let newProduct = req.body;
    collection.insert(newProduct)
    res.json(products)
}


exports.show = function show(req, res) {
    let product = products.find(p => p._id == req.params.id);
    return res.json(product)
}

exports.create = function create(req, res) {
    let newProduct = req.body;
    products.push(newProduct);
    res.json(products)
}

exports.update = function update(res, req) {
    let product = products.find(p => p._id == req.params.id);
    product.make = body.make;
    res.json(product)
}

exports.remove = function remove(res, req) {
    let product = products.find(p => p._id == req.params.id)
    product.isActive == false;
    res.send("deleted")
}