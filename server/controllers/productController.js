let Product = require("../models/productModel")

module.exports.list =  function list(request, response) {
    Product.find({}).exec()
    .then(products => response.json(products))
};
module.exports.show =  function show(request, response) {
    Product.findById({"_id": request.params.id}).exec()
    .then(product => response.json(product))
};

module.exports.create =  function create(request, response) {
    const newProduct = new Product(request.body);
    newProduct.save()
    .then(savedProduct => response.json(savedProduct))
};

module.exports.remove =  function remove(request, response) {
    const foundProduct = products.find(product => product["_id"] == request.params.id)
    products = products.filter(product => product["_id"] != request.params.id)
    return response.json(products);
}
