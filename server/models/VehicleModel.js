const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    year: Number,
    make: String,
    model: String,
  });

const Vehicle = mongoose.model('Vehicle', VehicleSchema);
module.exports = Vehicle;