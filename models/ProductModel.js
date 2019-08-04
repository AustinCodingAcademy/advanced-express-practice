// ProductModel - name, description

const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: String,
    description: String,
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;