const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number
  },
  imgUrl: {
    type: String
  },
  price: {
    type: Number
  },
  category: {
    type: String
  },
  reviews: [
    {
      description: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      }
    }
  ],
});

module.exports = mongoose.model("Product", schema);

