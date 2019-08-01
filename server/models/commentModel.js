const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    body: String
})

let Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;