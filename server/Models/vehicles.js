let mongoose = require('mongoose');


let vehicleSchema = new mongoose.Schema({
    year: String,
    make: String,
    model: String
})

module.exports = mongoose.model('Vehicle', vehicleSchema);