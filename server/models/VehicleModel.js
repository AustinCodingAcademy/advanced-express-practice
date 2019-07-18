const mongoose = require('mongoose');

var VehicleModel = new mongoose.Schema({
    year: String,
    make: String,
    model: String,
})

var Vehicle = mongoose.model("Vehicle", VehicleModel);

module.exports = Vehicle