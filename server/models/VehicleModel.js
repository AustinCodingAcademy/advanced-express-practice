const mongoose = require('mongoose');

var vehicleSchema = new mongoose.Schema({
    year: Number,
    make: String,
    model: String
});

var Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;