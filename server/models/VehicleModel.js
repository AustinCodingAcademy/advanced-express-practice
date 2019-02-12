const mongoose = require('mongoose');


const vehicleSchema = new mongoose.Schema({
  year : String, 
  make : String, 
  model : String
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;