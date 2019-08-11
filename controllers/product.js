const {getDatabase} = require('../database');
let db = getDatabase;
const collection = db.collection('products');

let products = require('../products');

exports.list = function list(request, response) {
    let found = collection.find({});
    found.toArray(function(err, products) {
      response.json(products);
}

exports.create = function(request, response) {
    let newProduct = request.body;
    collection.insertMany(newProduct);
    response.json(newProduct);
}

exports.show = function(request, response) {
    let findProduct = request.params.productId;
    let product = collection.find({_id: findProduct});
    response.json(product);
}
