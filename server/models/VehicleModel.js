const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    year: Number,
    make: String,
    model: String
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;