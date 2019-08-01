const mongoose = require('mongoose');

let commentsSchema = new mongoose.Schema({
    body: String
});

let Comment = mongoose.model('Comment', commentsSchema);

module.exports = Comment;