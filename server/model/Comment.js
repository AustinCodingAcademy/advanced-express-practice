const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  body: {
    required: true,
    type: String,
  },
  postId: {
    type: Number,
  },
});

module.exports = mongoose.model("Comment", schema);
