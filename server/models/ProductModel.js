const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: String,
    description: String
  });

module.exports = mongoose.model('Product', productSchema);