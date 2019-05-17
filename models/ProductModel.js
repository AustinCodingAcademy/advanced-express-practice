let mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    name: String,
    description: String
})

Product = mongoose.model('Product', productSchema)

module.exports = Product
