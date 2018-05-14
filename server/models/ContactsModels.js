const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactsSchema = new Schema({
    Name: {
        required: true,
        type: String
    },
    Occupation: {
        required: true,
        type: String
    },
    Avatar: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Contact', contactsSchema);