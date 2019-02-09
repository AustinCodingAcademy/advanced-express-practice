let mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: String,
    description: String
})

module.exports = mongoose.model('Product', productSchema)