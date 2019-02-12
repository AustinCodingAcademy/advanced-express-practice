const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
  });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;