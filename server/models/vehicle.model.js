//  VehicleModel - year, make, model


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VehicleSchema = new Schema({
    year: {type: Number, required: true, max: 4},
    make: {type: String, required: true},
    model: {type: String}
});


// Export the model
module.exports = mongoose.model('Vehicle', VehicleSchema);
