const mongoose = require('mongoose');

let vehiclesSchema = new mongoose.Schema({
    year: Number,
    make: String,
    model: String
});

let Vehicle = mongoose.model('Vehicle', vehiclesSchema);

module.exports = Vehicle;