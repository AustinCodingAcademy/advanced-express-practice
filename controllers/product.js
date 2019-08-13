let ProductsModel = require("../models/ProductModel")

//get - return all products
exports.list = function list(req, res) {
    ProductModel.find(function (err, products){
        if (err) return  console.error(err);
        return res.json(products);
    })
}

//get one product by id
exports.show = function show(req, res) {
    ProductModel.findById(req.params.productId, function (err, vehicle){
        if (err) return  console.error(err);
        return res.json(product);
    })
}

//post 
exports.create = function create(req, res) {
    const newProduct = new ProductModel(req.body);
    newProduct.save((err, v) => {
        res.json(v);
    }); 
}

//put
exports.update = function update(req, res) {
    let product = products.find(i => i._id == req.params.productId);
    product.name = body.name;
    res.json(product)
}

//delete
exports.remove = function remove(req, res) {
    let product = products.find(i => i._id == req.params.productId);
    product.isActive = false;
    res.send("deleted")
}