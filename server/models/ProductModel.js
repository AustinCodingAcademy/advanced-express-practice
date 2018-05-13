const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  productName: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("Product", schema);
