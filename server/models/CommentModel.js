const mongoose = require('mongoose');

var CommentModel = new mongoose.Schema({
    body: String,
});

var Comment = mongoose.model('Comment', CommentModel);

module.exports = Comment;