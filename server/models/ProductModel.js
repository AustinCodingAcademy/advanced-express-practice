const mongoose = require('mongoose');

var ProductModel = new mongoose.Schema({
    name: String,
    description: String,
});

var Product = mongoose.model("Product", ProductModel);

module.exports = Product;