const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentsSchema = new Schema({
    body: {
        required: true,
        type: string
    }
});

modules.export = mongoose.model('Comment', schema)