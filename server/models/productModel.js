const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productsSchema = new Schema({
    name: String,
    description: String
});

let Product = mongoose.model('Product', productsSchema);

module.exports = Product;