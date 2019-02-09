const mongoose = require("mongoose");

var vehicleSchema = new mongoose.Schema({
    _id: Number,
    imgUrl: String,
    year: String,
    make: String,
    model: String,
    price: String,
    km: Number,
    miles: Number,
    fuel: String,
    city: String,
    isNew: Boolean
});
var Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;