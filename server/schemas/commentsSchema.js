const mongoose = require('mongoose');

let commentsSchema = new mongoose.Schema({
    body: String
});

let Comment = mongoose.model('comments', commentsSchema);

module.exports = Comment;