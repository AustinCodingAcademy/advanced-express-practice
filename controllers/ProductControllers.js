let products = require("../products");

//Display all products
exports.list = function(req,res){
    res.json(products)
}

//Display one products
exports.show = function(req,res){
    let productId = Number(req.params.id);
    let product = products.find(p  => p._id === productId);
    res.json(product)
}

//handle comment products
exports.create = function(req,res){
    let products = req.body;
    products._id = products.length + 1;
    products.push(product);
    res.json(product); 
};