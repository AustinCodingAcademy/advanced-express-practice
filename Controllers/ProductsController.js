let products = require('../products');

exports.list = function list( req, res ) {
    return res.json(products);
}

exports.show = function show( req, res ) {
    let id = Number(req.params.id);
    let product = products.find( p => p._id === id );
    return res.json(product);
}

exports.create = function create( req, res) {
    let newProduct = req.body;
    newProduct._id = products[products.length - 1]._id + 1;
    products.push(newProduct);
    return res.json(products);
}
