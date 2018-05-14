const mongoose = require('mongoose'); 

const schema = new mongoose.Schema({
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

module.exports = mongoose.model('contact', Schema);