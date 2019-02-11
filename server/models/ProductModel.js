const mongoose = require("mongoose");

var reviewSchema = new mongoose.Schema({
    description: String,
    rating: Number
});

var productSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    description: String,
    reviews: [reviewSchema],
    rating: Number,
    imgUrl: String,
    price: String,
    category: String
});
var Product = mongoose.model("Product", productSchema);

module.exports = Product;