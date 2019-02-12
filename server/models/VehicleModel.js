const mongoose = require("mongoose");

var vehicleSchema = new mongoose.Schema({
    year: Number,
    make: String,
    model: String
})

module.exports = mongoose.model('Vehicle', vehicleSchema);