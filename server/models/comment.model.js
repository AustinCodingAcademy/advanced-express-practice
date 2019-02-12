// CommentModel - body

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CommentSchema = new Schema({
    body: {type: String, required: true, max: 120}
    
});


// Export the model
module.exports = mongoose.model('Comment', CommentSchema);