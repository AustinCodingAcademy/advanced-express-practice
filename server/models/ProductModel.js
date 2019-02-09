const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
});

// model
const Product = mongoose.model("Products", productSchema);

module.exports = Product;
