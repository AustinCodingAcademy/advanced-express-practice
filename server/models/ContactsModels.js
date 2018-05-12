const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactsScheme = new Schema({
    Name: {
        required: true,
        type: string
    },
    Occupation: {
        required: true,
        type: string
    },
    Avatar: {
        required: true,
        type: string
    }
});