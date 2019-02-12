const mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
    body: {
        required: true,
        type: String
    }
});

let Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
