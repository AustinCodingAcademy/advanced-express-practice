const mongoose = require('mongoose');

let productsSchema = new mongoose.Schema({
    name: String,
    description: String
});

let Product = mongoose.model('Product', productsSchema);

module.exports = Product;