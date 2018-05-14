const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentsSchema = new Schema({
    body: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Comment', commentsSchema);