const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    body: String,
  });

const comment = mongoose.model('Comment', CommentSchema);
module.exports = comment;
