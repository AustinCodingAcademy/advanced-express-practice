const mongoose = require('mongoose');


var productSchema = new mongoose.Schema({
name: String,
description: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;