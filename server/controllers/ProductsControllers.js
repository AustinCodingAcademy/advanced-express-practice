let ProductModel = require('../models/ProductsModels')

module.exports.list = function list(request, response) {
    ProductModel.find({}).exec()
    .then(product => {
        response.json(product);
    })
};

module.exports.show = function list(request, response) {
    productModels.findbyID(request.params._id).exec()
    .then(product => {
        response.json(product);
    })
};

module.exports.create =  function create(request, response){
    const newProduct = new productModel(request.body);
    newProduct.save()
    .then(savedProductt => {
        response.json(savedProduct);
    })
};