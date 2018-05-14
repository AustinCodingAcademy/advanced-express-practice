const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let vehiclesSchema = new Schema({
    year: {
        required: true,
        type: Number
    },
    make: {
        required: true,
        type: String
    },
    model: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Vehicle', vehiclesSchema);