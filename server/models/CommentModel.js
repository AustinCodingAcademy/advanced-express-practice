const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  body: {
    type: String
  }
});

// model
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
