const mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    _id: Number,
    body: String,
    postId: Number
});
var Comment = mongoose.model("Comment", commentSchema);
  
module.exports = Comment;