const mongoose = require('mongoose');
var commentSchema = new mongoose.Schema({
    Body: String,
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;