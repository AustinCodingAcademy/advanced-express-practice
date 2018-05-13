const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  comment: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("Comment", schema);
