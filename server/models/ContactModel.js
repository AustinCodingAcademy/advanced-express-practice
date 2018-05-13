const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  occupation: {
    required: true,
    type: String
  },
  avatar: {
    type: String
  }
});

module.exports = mongoose.model("contact", schema);
