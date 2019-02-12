const mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Product', productSchema);
