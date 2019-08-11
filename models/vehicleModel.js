const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema ({
    year: Number,
    make: String,
    model: String
})

let Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
